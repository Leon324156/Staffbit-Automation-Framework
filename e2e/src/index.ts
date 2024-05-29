import dotenv from 'dotenv'
import {
    env,
    getJsonFromFile
} from './env/parseEnv'
import {
    GlobalConfig,
    HostsConfig,
    PagesConfig,
    PageElementMappings,
    EmailsConfig
} from './env/global'
import * as fs from "fs"
import { generateCucumberRuntimeTag } from "./support/tag-helper"

const environment = env('NODE_ENV')

dotenv.config({ path: env('COMMON_CONFIG_FILE')})
dotenv.config({ path: `${env('ENV_PATH')}${environment}.env` })

const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'))
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGE_URLS_PATH'))
const emailsConfig: EmailsConfig = getJsonFromFile(env('EMAILS_URLS_PATH'))
const mappingFiles = fs.readdirSync(`${process.cwd()}${env('PAGE_ELEMENTS_PATH')}`)

const getEnvList = (): string[] => {
    const envList = Object.keys(hostsConfig)

    if (envList.length === 0) {
        throw Error(`🧨 No environments mapped in your ${env('HOSTS_URLS_PATH')} 🧨`)
    }

    return envList
}

const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigAcc, file) => {
        const key = file.replace('.json', '')
        const elementMappings = getJsonFromFile(`${env('PAGE_ELEMENTS_PATH')}${file}`)
        return { ...pageElementConfigAcc, [key]: elementMappings}
    },
    {}
)

const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
    emailsConfig,
    pageElementMappings
}

const common = `./src/features/**/*.feature \
        --require-module ts-node/register \
        --require ./src/step-definitions/**/**/*.ts \
        -f json:./reports/report.json \
        --world-parameters ${JSON.stringify(worldParameters)} \
        --format progress-bar \
        --parallel ${env('PARALLEL')} \
        --retry ${env('RETRY')}`

const dev = generateCucumberRuntimeTag(common, environment, getEnvList(), 'dev')
const smoke = generateCucumberRuntimeTag(common, environment, getEnvList(), 'smoke')
const regression = generateCucumberRuntimeTag(common, environment, getEnvList(), 'regression')

console.log(`🥒✨🥒✨🥒✨🥒✨🥒✨🥒✨🥒✨🥒✨`)

export { dev, smoke, regression }
