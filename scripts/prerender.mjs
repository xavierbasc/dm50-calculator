// Runs after `vite build`. Boots the production build with `vite preview`,
// loads it in headless Chromium, waits for React's first commit (no
// scrolling — this must capture exactly the same initial state a real
// visitor's browser produces, so there's no flash when the client bundle
// takes over), and writes the fully-rendered HTML back over dist/index.html.
//
// Everything outside #root (meta tags, JSON-LD, etc. from index.html) is
// untouched by React and survives this round-trip as-is.

import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distIndex = path.join(root, 'dist', 'index.html')

// Must match `base` in vite.config.ts
const BASE = '/dm50-calculator/'
const PORT = 4173
const URL = `http://localhost:${PORT}${BASE}`

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url)
        if (res.ok) return resolve()
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error(`Timed out waiting for ${url}`))
      setTimeout(tick, 200)
    }
    tick()
  })
}

function killPreview(preview) {
  if (preview.exitCode !== null || preview.killed) return
  try {
    // Negative pid = kill the whole process group, since `npx vite preview`
    // can spawn the real server as a grandchild that a plain preview.kill()
    // (SIGTERM to just the npx wrapper's pid) would otherwise leave running
    // — that's what hung the CI job the first time this shipped: the build
    // step never returned because a live server was still holding stdio open.
    process.kill(-preview.pid, 'SIGTERM')
  } catch {
    // already gone, or platform doesn't support process groups
    try { preview.kill('SIGTERM') } catch {}
  }
}

async function main() {
  const preview = spawn(
    'npx',
    ['vite', 'preview', '--port', String(PORT), '--strictPort'],
    { cwd: root, stdio: ['ignore', 'ignore', 'pipe'], detached: true },
  )
  preview.stderr.on('data', (d) => process.stderr.write(d))

  try {
    await waitForServer(URL)

    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto(URL, { waitUntil: 'networkidle' })
    await page.waitForFunction(() => {
      const root = document.getElementById('root')
      return !!root && root.children.length > 0
    })

    const html = await page.content()
    writeFileSync(distIndex, html)
    console.log(`prerendered dist/index.html (${html.length} bytes)`)

    await browser.close()
  } finally {
    killPreview(preview)
  }
}

// Watchdog: this step has hung the CI job before (a leftover server process
// kept stdio open and the build step never returned). If anything stalls —
// slow network for the Google Fonts request, a Playwright wait that never
// resolves — force the process down rather than eating the runner's whole
// timeout budget. unref() so it doesn't itself keep a healthy run alive.
const watchdog = setTimeout(() => {
  console.error('prerender.mjs: watchdog timeout after 60s, forcing exit')
  process.exit(1)
}, 60_000)
watchdog.unref()

// Force-exit once done: this is a one-shot build script, and a lingering
// handle from the browser or the preview server's process group is not
// worth chasing — better to guarantee the CI step actually returns.
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
