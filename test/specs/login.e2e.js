import DashboardPage from '../pageobjects/dashboard.page'
import HomePage from '../pageobjects/home.page'
import LoginPage from '../pageobjects/login.page'
import ResetPasswordPage from '../pageobjects/resetPassword.page'
import tData from '../resources/credentials.json'

describe('login page', () => {
  // open login page for each test
  beforeEach(async () => {
    await HomePage.open()
    await expect(HomePage.headlineText).toHaveText('Welcome to takehome')

    await HomePage.loginButton.click()

    await expect(browser).toHaveUrl(LoginPage.url)
  })

  // reset close browser in between each test
  afterEach(async () => {
    await browser.reloadSession()
  })

  it('should contain no broken links', async () => {
    const links = await LoginPage.getLinks()
    for (let link of links) {
      link = (link.startsWith('/')) ? 'https://sso.zeachable.com' + link : link
      expect(await LoginPage.isLinkBroken(link))
        .toBe(true, `${link} did not return 200 status`)
    }
  })

  it('should login with valid credentials and logout to home page', async () => {
    await LoginPage.emailInput.setValue(tData.email)
    await LoginPage.passwordInput.setValue(tData.password)
    await LoginPage.loginButton.click()

    await expect(browser).toHaveTitle(DashboardPage.title)
    await expect(DashboardPage.signedInDirectoryDiv).toBeDisplayed()

    await DashboardPage.clickProfileDropdownLink('Log Out')
    await expect(HomePage.headlineText).toHaveText('Welcome to takehome')
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
