# teachable-take-home

[![e2e-test](https://github.com/angelo-loria/teachable-take-home/actions/workflows/e2e-test.yaml/badge.svg)](https://github.com/angelo-loria/teachable-take-home/actions/workflows/e2e-test.yaml)


This is a [WebdriverIO](https://webdriver.io/docs/what-is-webdriverio) project, written in JavaScript, utilizing the [mochaJS](https://mochajs.org/) testing framework, structured in a [page object design pattern](https://webdriver.io/docs/pageobjects), with [Github Actions](https://github.com/angelo-loria/teachable-take-home/actions/workflows/e2e-test.yaml) providing test execution. Tests are executed in Chrome via [ChromeDriver](https://sites.google.com/chromium.org/driver/).


### Project Structure

    teachable-take-home
    ├─> .github/
    │   └─> workflows/              # Github Actions workflows 
    ├─> .vscode/                    # VSCode config files
    ├─> test/
    │   ├─> pageobjects/            # page object files
    │   ├─> resources/              # test data files, etc.
    │   ├─> specs/                  # test spec files
    │   └─> unit/                   # unit test files    
    ├── babel.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── wdio.conf.js