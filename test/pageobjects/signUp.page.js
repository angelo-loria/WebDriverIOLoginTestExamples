
import Page from './page'

/**
 * selectors and methods for sign up page
 */
class SignUpPage extends Page {
  get allowMarketingCheckbox () { return $('#allow_marketing_emails') }
  get containerHeading () { return $('.heading3') }
  get emailInput () { return $('#user_email') }
  get fullNameInput () { return $('#user_name') }
  get headingErrorText () { return $('.bodySmall') }
  get pageErrorText () { return $('h1.page-error') }
  get passwordInput () { return $('#password') }
  get signUpButton () { return $('[data-testid="signup-button"]') }

  get url () { return this.ssoBaseUrl + '/sign_up/with_email' }
}

export default new SignUpPage()
