
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('add to duo button displays player duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath('(//*[text()="Add to Duo"])[1]')).click()
    await driver.sleep(1000)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})