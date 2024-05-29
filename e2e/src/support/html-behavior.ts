import {
    By,
    WebDriver,
    WebElement
} from 'selenium-webdriver'
import {
    ElementIndex,
    ElementLocator,
    InputValue
} from '../env/global'

export const browserSleep = async (
    driver: WebDriver,
    waitSeconds: string
): Promise<void> => {
    await driver.sleep(parseInt(waitSeconds, 10) * 1000)
}

export const getElement = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
): Promise<WebElement> => {
    const element = await driver.findElement(By.css(elementIdentifier))
    return element
}

export const getElements = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
): Promise<WebElement[]> => {
    const elements = await driver.findElements(By.css(elementIdentifier))
    return elements
}

export const getElementWithOptions = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    option: string,
): Promise<WebElement> => {
    const element = await driver.findElement(By.css(`${elementIdentifier} > option[value=${option}]`))
    return element
}

export const elementDisplayed = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator
): Promise<boolean | null> => {
    try {
        await driver.findElement(By.css(elementIdentifier))
        return true
    } catch (e) {
        return false
    }
}

export const elementDisplayedAtIndex = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    elementIndex: ElementIndex
): Promise<boolean | null> => {
    try {
        const elements = await driver.findElements(By.css(elementIdentifier))
        await elements[elementIndex].isDisplayed()
        return true
    } catch (e) {
        return false
    }
}

export const getElementText = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator
): Promise<string | null> => {
    const element = await getElement(driver, elementIdentifier)
    const elementText = await element.getAttribute("innerText")
    return elementText
}

export const getElementTextAtIndex = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    elementIndex: ElementIndex
): Promise<string | null> => {
    const elements = await getElements(driver, elementIdentifier)
    const textAtIndex = await elements[elementIndex].getText()
    return textAtIndex
}

export const clickElement = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator
): Promise<void> => {
    const element = await getElement(driver, elementIdentifier)
    await element.click()
}

export const clickElementAtIndex = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    elementIndex: ElementIndex
): Promise<void> => {
    const elements = await getElements(driver, elementIdentifier)
    await elements[elementIndex].click()
}

export const inputElementValue = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    inputValue: InputValue,
): Promise<void> => {
    const element = await getElement(driver, elementIdentifier)
    await element.clear()
    await element.sendKeys(inputValue)
}

export const selectElementValue = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    option: string
): Promise<void> => {
    const element = await getElementWithOptions(driver, elementIdentifier, option)
    await element.click()
}

export const getElementValue = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator
): Promise<string> => {
    const element = await getElement(driver, elementIdentifier)
    return await element.getAttribute('value')
}

export const scrollElementIntoView = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
): Promise<void> => {
    const element = await getElement(driver, elementIdentifier)
    await driver.executeScript("arguments[0].scrollIntoView(false)", element)
    await driver.sleep(1500)
}

export const scrollElementIntoViewAtIndex = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    elementIndex: ElementIndex,
): Promise<void> => {
    const element = await getElements(driver, elementIdentifier)
    await driver.executeScript("arguments[0].scrollIntoView(false)", element[elementIndex])
    await driver.sleep(1500)
}

export const elementEnabled = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator
): Promise<boolean | null> => {
    const element = await getElement(driver, elementIdentifier)
    if (!await element.isEnabled()) {
        return false
    } else {
        return true
    }
}
export const getAttributeText = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    attribute: string
): Promise<string | null> => {
    const element = await getElement(driver, elementIdentifier)
    const attributeText = element.getAttribute(attribute)
    return attributeText
}
