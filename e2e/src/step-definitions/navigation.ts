import { Given } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world'
import { PageId } from "../env/global"
import {
    currentPathMatchesPageId,
    reloadPage
} from "../support/navigation-behavior"
import { navigateToPage } from "../support/navigation-behavior"
import { waitFor } from "../support/wait-for-behavior"
import { logger } from "../logger"

Given(
    /^I am on the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { driver },
            globalConfig
        } = this

        logger.log(`I am on the ${pageId} page`)

        await navigateToPage(driver, pageId, globalConfig)

        await waitFor(() => currentPathMatchesPageId(driver, pageId, globalConfig), globalConfig, {
            target: pageId,
            type: 'page'
        })

    }
)

Given(
    /^I am directed to the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { driver },
            globalConfig
        } = this

        logger.log(`I am directed to the ${pageId} page`)

        await waitFor(() => currentPathMatchesPageId(driver, pageId, globalConfig), globalConfig, {
            target: pageId,
            type: 'page'
        })

    }
)

Given(
    /^I refresh the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { driver },
            globalConfig
        } = this

        logger.log(`I refresh the ${pageId} page`)

        await reloadPage(driver)

        await waitFor(() => currentPathMatchesPageId(driver, pageId, globalConfig), globalConfig, {
            target: pageId,
            timeout: 30000,
            type: 'page'
        })
    }
)
