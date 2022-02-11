import DashboardPage from '../pageobjects/dashboard.page'
import HomePage from '../pageobjects/home.page'
import LoginPage from '../pageobjects/login.page'
import ResetPasswordPage from '../pageobjects/resetPassword.page'
import tData from '../resources/credentials.json'

describe('login page', () => {
  beforeEach(async () => {
    await HomePage.open()
    await HomePage.loginButton.click()

    await expect(browser).toHaveUrl(LoginPage.url)
  })

  afterEach(async () => {
    await browser.reloadSession()
  })

  it('should login with valid credentials', async () => {
    await LoginPage.emailInput.setValue(tData.email)
    await LoginPage.passwordInput.setValue(tData.password)
    await LoginPage.loginButton.click()

    await expect(browser).toHaveTitle(DashboardPage.title)
    await expect(DashboardPage.signedInDirectoryDiv).toBeDisplayed()
  })

  it('should allow user to submit email for password reset', async () => {
    await LoginPage.forgotPasswordLink.click()

    await expect(browser).toHaveUrl(ResetPasswordPage.url)

    await ResetPasswordPage.emailInput.setValue(tData.email)
    await ResetPasswordPage.nextButton.click()

    await expect(ResetPasswordPage.containerHeading).toHaveText('Check your email')
    await expect(ResetPasswordPage.emailToReceiveResetText).toHaveText(tData.email)

    await ResetPasswordPage.resendEmailButton.click()
    await expect(ResetPasswordPage.emailSentNotification).toBeDisplayed()
  })
})
