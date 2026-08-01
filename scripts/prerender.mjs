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

async function main() {
  const preview = spawn(
    'npx',
    ['vite', 'preview', '--port', String(PORT), '--strictPort'],
    { cwd: root, stdio: 'pipe' },
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
    preview.kill()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
