import { Then } from '@cucumber/cucumber'
import {
    waitFor,
    waitForResult,
    waitForSelector
} from '../support/wait-for-behavior'
import { getElementLocator } from '../support/web-element-helper'
import { ScenarioWorld } from './setup/world'
import {
    ElementKey,
    InputValue
} from '../env/global'
import {
    inputElementValue,
    selectElementValue
} from "../support/html-behavior"
import {
    getRandomData,
    RandomInputType,
    randomInputTypes
} from "../support/random-data-helper"
import { parseInput } from "../support/input-helper"
import { logger } from "../logger"
import { stringIsOfOptions } from "../support/options-helper"

Then(
    /^I fill in the "([^"]*)" input with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, inputValue: InputValue) {
        const {
            screen: { driver },
            globalConfig
        } = this

        logger.log(`I fill in the ${elementKey} input with ${inputValue}`)

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig)

        await waitFor(async () => {

                const elementStable = await waitForSelector(driver, elementIdentifier)

                if (elementStable) {
                    const parsedInput = parseInput(inputValue, globalConfig)
                    await inputElementValue(driver, elementIdentifier, parsedInput)
                    return waitForResult.PASS
                }


                return waitForResult.ELEMENT_NOT_AVAILABLE

            },
            globalConfig,
            { target: elementKey}
        )
    }
)

Then(
    /^I fill in the "([^"]*)" input with random "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, randomInputType: RandomInputType) {
        const {
            screen: { driver },
            globalConfig
        } = this

        logger.log(`I fill in the ${elementKey} input with random ${randomInputType}`)

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig)

        const validRandomInputType = stringIsOfOptions<RandomInputType>(randomInputType, randomInputTypes)

        await waitFor(async () => {

                const elementStable = await waitForSelector(driver, elementIdentifier)

                if (elementStable) {
                    const randomContent = getRandomData(validRandomInputType)
                    await inputElementValue(driver, elementIdentifier, randomContent)
                    return waitForResult.PASS
                }

                return waitForResult.ELEMENT_NOT_AVAILABLE
            },

            globalConfig,
            {target: elementKey})

    }
)
