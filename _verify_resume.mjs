import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, acceptDownloads: true })
const errors = []
page.on('pageerror', (err) => errors.push(String(err)))
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })

const dir = 'C:/Users/anita/AppData/Local/Temp/claude/c--Users-anita-OneDrive-Desktop-portfoliov1/259a88e1-6fdc-457a-bb3b-05d20f9cc3bb/scratchpad'

await page.goto('http://localhost:5184', { waitUntil: 'networkidle' })
await page.screenshot({ path: `${dir}/nav-resume-btn.png`, clip: { x: 0, y: 0, width: 1600, height: 100 } })

// click resume label to open modal
await page.getByRole('button', { name: 'Resume' }).click()
await page.waitForTimeout(1000)
await page.screenshot({ path: `${dir}/resume-modal.png` })

// verify download link triggers a download without closing modal
const downloadPromise = page.waitForEvent('download')
await page.locator('a[aria-label="Download resume"]').first().click()
const download = await downloadPromise
console.log('DOWNLOAD_FILENAME:', download.suggestedFilename())

const modalStillOpen = await page.locator('text=Resume').isVisible()
console.log('MODAL_STILL_OPEN_AFTER_DOWNLOAD_CLICK:', modalStillOpen)

// close via X
await page.locator('button[aria-label="Close"]').click()
await page.waitForTimeout(300)
const modalClosed = await page.locator('button[aria-label="Close"]').count()
console.log('MODAL_CLOSED_COUNT:', modalClosed)

console.log('CONSOLE_ERRORS:', JSON.stringify(errors))
await browser.close()
