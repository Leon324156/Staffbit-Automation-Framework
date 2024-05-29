# Automation Framework for Testing Staffbit

This is a test environment created by me for my engineering thesis to test the website [staffbit.com](https://staffbit.com).


This framework is built using Selenium, TypeScript, and Cucumber, ensuring clear and understandable Cucumber tests for everyone. All functionalities of the website have been thoroughly tested.

## Features

- **Environment Configuration:** Choose whether to run tests locally or in production.
- **Test Tags:** Use tags such as `dev`, `smoke`, and `regression` to select specific tests to run.
- **Automated Reporting:** After each test run, a report is generated automatically.

## Structure

- **Locators:** Stored in `.json` files, assigned to specific pages. Common elements (e.g., navbar) are stored in `common.json`.
- **URL Validation:** All pages are listed in a separate `.json` file to facilitate sensible URL validation.
- **Browser Configuration:** You can specify the browser to use for testing, provided you have the appropriate version of the browser driver installed.
- **Parallel Execution:** Configure the number of browser windows to run in parallel.
- **Retry Mechanism:** Set the number of retry attempts for failed tests.
