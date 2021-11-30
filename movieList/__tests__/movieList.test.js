const { Builder, Capabilities, By } = require("selenium-webdriver")
require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get("http://127.0.0.1:5500/movieList/index.html")
})

afterAll(async () => {
    await driver.quit()
})


test("cross-off a movie", async () => {
    await driver.sleep(3000)

    const inputField = await driver.findElement(By.xpath("//input"))
    inputField.sendKeys("Hocus Pocus")

    const button = await driver.findElement(By.xpath("//button"))
    await button.click()

    const theMovie = await driver.findElement(By.xpath("//li/span")).getText();

    expect(theMovie).toEqual("Hocus Pocus")

    const crossOff = await driver.findElement(By.xpath("//li/span"))

    await crossOff.click()

    await driver.sleep(3000)
})

test("re-add a movie", async () => {
    await driver.sleep(3000)

    const reAdd = await driver.findElement(By.xpath("//li/span"))

    await reAdd.click()

    await driver.sleep(3000)   
})


test("delete a movie", async () => {
    await driver.sleep(3000)

    const deleteBtn = await driver.findElement(By.xpath("//li/button"))

    await deleteBtn.click()

    await driver.sleep(3000)
})



