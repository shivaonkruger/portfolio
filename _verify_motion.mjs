import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 700 } })
const errors = []
page.on('pageerror', (err) => errors.push(String(err)))
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })

const dir = 'C:/Users/anita/AppData/Local/Temp/claude/c--Users-anita-OneDrive-Desktop-portfoliov1/259a88e1-6fdc-457a-bb3b-05d20f9cc3bb/scratchpad'

await page.goto('http://localhost:5188', { waitUntil: 'networkidle' })

const banner = page.locator('a[aria-label*="CAMI"]')
await banner.scrollIntoViewIfNeeded()

const box = await banner.boundingBox()
const clip = { x: 0, y: Math.round(box.y), width: 1600, height: Math.round(box.height) }

for (let i = 0; i < 5; i++) {
  await page.screenshot({ path: `${dir}/motion-${i}.png`, clip })
  await page.waitForTimeout(1000)
}

const track = page.locator('a[aria-label*="CAMI"] .cami-marquee-track')
const cssCheck = await track.evaluate(el => {
  const cs = getComputedStyle(el)
  return { animationName: cs.animationName, animationDuration: cs.animationDuration, animationPlayState: cs.animationPlayState }
})
console.log('CSS_ANIMATION_STATE:', JSON.stringify(cssCheck))
console.log('CONSOLE_ERRORS:', JSON.stringify(errors))
await browser.close()
