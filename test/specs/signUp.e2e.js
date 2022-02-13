import DashboardPage from '../pageobjects/dashboard.page'
import HomePage from '../pageobjects/home.page'
import SignUpPage from '../pageobjects/signUp.page'
import tData from '../resources/credentials.json'

describe('sign up page', () => {
  // open sign up page for each test
  beforeEach(async () => {
    await HomePage.open()

    await expect(HomePage.headlineText).toHaveText('Welcome to takehome')
    await HomePage.signUpButton.click()

    await expect(browser).toHaveUrl(SignUpPage.url)
  })

  // close browser for each test
  afterEach(async () => {
    await browser.reloadSession()
  })

  it('should contain no broken links', async () => {
    const links = await HomePage.getLinks()
    for (let link of links) {
      link = (link.startsWith('/')) ? 'https://sso.zeachable.com' + link : link
      expect(await HomePage.isLinkStatusOk(link))
        .toBe(true, `${link} did not return 200 status`)
    }
  })

  it('should allow signup with required fields', async () => {
    await SignUpPage.fullNameInput.setValue(tData.fullName)
    await SignUpPage.emailInput.setValue(SignUpPage.getRandomEmail())
    await SignUpPage.passwordInput.setValue(tData.password)
    await SignUpPage.allowMarketingCheckbox.click()
    await SignUpPage.signUpButton.click()

    await expect(DashboardPage.bannerWarning).toHaveText(
      'Please confirm your email to fully activate your account. ' +
      'You can do this by clicking the link in the email confirmation we sent you.')
  })

  it('should not allow signup with email already in use', async () => {
    await SignUpPage.fullNameInput.setValue(tData.fullName)
    await SignUpPage.emailInput.setValue(tData.email)
    await SignUpPage.passwordInput.setValue(tData.password)
    await SignUpPage.allowMarketingCheckbox.click()
    await SignUpPage.signUpButton.click()

    await expect(SignUpPage.headingErrorText).toHaveText(
      'Email is already in use. Please log in to your account.')
  })
})
