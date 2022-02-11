import HomePage from '../pageobjects/home.page'
import SignUpPage from '../pageobjects/signUp.page'
// import tData from '../resources/credentials.json'

describe('login page', () => {
  beforeEach(async () => {
    await HomePage.open()
    await HomePage.signUpButton.click()

    await expect(browser).toHaveUrl(SignUpPage.url)
  })

  afterEach(async () => {
    await browser.reloadSession()
  })
})
