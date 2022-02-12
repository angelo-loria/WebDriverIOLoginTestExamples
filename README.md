# teachable-take-home

[![e2e-test](https://github.com/angelo-loria/teachable-take-home/actions/workflows/e2e-test.yaml/badge.svg)](https://github.com/angelo-loria/teachable-take-home/actions/workflows/e2e-test.yaml)


This is a [WebdriverIO](https://webdriver.io/docs/what-is-webdriverio) project, written in JavaScript, utilizing the [mochaJS](https://mochajs.org/) testing framework, structured in a [page object design pattern](https://webdriver.io/docs/pageobjects), with [Github Actions](https://github.com/angelo-loria/teachable-take-home/actions/workflows/e2e-test.yaml) providing remote test execution. Tests are executed in Chrome via [ChromeDriver](https://sites.google.com/chromium.org/driver/).

### Why WebdriverIO?
* At its core, WebdriverIO leverages the power of the [WebDriver protocol](https://w3c.github.io/webdriver/), ensuring compatibity with the official W3C web standard and support in all major browsers
* WebdriverIO is built on top of NodeJS
* WebdriverIO simplifies the initial project configuration and ongoing development with a vast amount of helper functions, test runners, assertion libraries, and a rich set of APIs built into the framework
* There are a large amount of community-created plugins for extendability, an active Gitter channel for support, active ongoing development, and great documentation

### Project Structure

    teachable-take-home
    ├─> .github/
    │   └─> workflows/              # Github Actions workflows 
    ├─> .vscode/                    # VSCode config files
    ├─> test/
    │   ├─> pageobjects/            # page object files
    │   ├─> resources/              # test data files, etc.
    │   └─> specs/                  # test spec files
    ├── babel.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── wdio.conf.js