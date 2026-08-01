// One-off asset generator — NOT part of the build/CI pipeline.
// Rasterizes public/favicon.svg (the site's actual pixel-art brand mark,
// reused across Navbar/Footer) into PNG icons, and composes a matching
// Open Graph / Twitter Card social preview image, using Playwright to
// render real HTML/CSS so the output stays visually identical to the site.
//
// Run manually when brand assets need to be (re)generated:
//   node scripts/generate-brand-images.mjs

import { chromium } from 'playwright'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public')
const iconsDir = path.join(publicDir, 'icons')
mkdirSync(iconsDir, { recursive: true })

const faviconSvg = readFileSync(path.join(publicDir, 'favicon.svg'), 'utf-8')

const FONT_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Share+Tech+Mono&display=swap" rel="stylesheet">`

function iconHtml(size) {
  return `<!doctype html><html><head><meta charset="utf-8">
<style>
  html,body{margin:0;padding:0}
  #icon{width:${size}px;height:${size}px}
  #icon svg{width:100%;height:100%;image-rendering:pixelated;shape-rendering:crispEdges;display:block}
</style></head>
<body><div id="icon">${faviconSvg}</div></body></html>`
}

function ogHtml() {
  return `<!doctype html><html><head><meta charset="utf-8">
${FONT_LINK}
<style>
  html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
  body{
    background:
      radial-gradient(ellipse 70% 60% at 30% 40%, rgba(0,212,170,0.08) 0%, transparent 70%),
      #0a0e17;
    position:relative;
    font-family:'Share Tech Mono',monospace;
    color:#d4e8f0;
  }
  .dots{
    position:absolute;inset:0;opacity:0.25;
    background-image:radial-gradient(circle,#1e3347 1.5px,transparent 1.5px);
    background-size:28px 28px;
  }
  .frame{
    position:absolute;inset:18px;
    border:2px solid #1e3347;
  }
  .wrap{
    position:relative;height:100%;display:flex;align-items:center;gap:64px;
    padding:0 72px;
    box-sizing:border-box;
  }
  .icon-shell{
    flex:none;width:220px;height:220px;
    border:2px solid #1e3347;
    background:#131f2e;
    box-shadow:6px 6px 0 #0a0e17, 0 0 60px rgba(0,212,170,0.12);
    padding:16px;
    box-sizing:border-box;
  }
  .icon-shell svg{width:100%;height:100%;image-rendering:pixelated;shape-rendering:crispEdges;display:block}
  .title{
    font-family:'Press Start 2P',monospace;
    font-size:64px;
    line-height:1.3;
    color:#d4e8f0;
    margin:0 0 4px 0;
  }
  .subtitle{
    font-family:'Press Start 2P',monospace;
    font-size:30px;
    color:#00d4aa;
    text-shadow:0 0 10px #00d4aa,0 0 26px #00d4aa;
    margin:0 0 28px 0;
  }
  .tagline{
    font-size:24px;
    color:#8fb3c2;
    line-height:1.6;
    max-width:640px;
  }
  .tagline .arrow{color:#00d4aa}
  .badge{
    margin-top:28px;
    display:inline-block;
    font-family:'Press Start 2P',monospace;
    font-size:15px;
    letter-spacing:0.05em;
    padding:10px 16px;
    border:2px solid #007a63;
    color:#00d4aa;
    box-shadow:0 0 12px rgba(0,212,170,0.25);
  }
</style></head>
<body>
  <div class="dots"></div>
  <div class="frame"></div>
  <div class="wrap">
    <div class="icon-shell">${faviconSvg}</div>
    <div>
      <div class="title">DM50</div>
      <div class="subtitle">CALCULATOR</div>
      <div class="tagline">
        <span class="arrow">&gt;</span> HP-style RPN &amp; CAS scientific calculator<br/>
        <span class="arrow">&gt;</span> iPhone &middot; iPad &middot; Mac &middot; Android &middot; Windows &middot; Linux
      </div>
      <div class="badge">100% OFFLINE &middot; NO SUBSCRIPTION</div>
    </div>
  </div>
</body></html>`
}

async function main() {
  const browser = await chromium.launch()

  // Icons
  const iconTargets = [
    { file: 'icon-192.png', size: 192 },
    { file: 'icon-512.png', size: 512 },
    { file: 'apple-touch-icon.png', size: 180 },
  ]
  for (const { file, size } of iconTargets) {
    const page = await browser.newPage({ viewport: { width: size, height: size } })
    await page.setContent(iconHtml(size))
    await page.locator('#icon').screenshot({ path: path.join(iconsDir, file) })
    await page.close()
    console.log(`wrote public/icons/${file}`)
  }

  // Open Graph / Twitter Card image
  {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
    await page.setContent(ogHtml())
    await page.waitForTimeout(150) // let webfonts finish applying
    await page.screenshot({ path: path.join(publicDir, 'og-image.png') })
    await page.close()
    console.log('wrote public/og-image.png')
  }

  await browser.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
