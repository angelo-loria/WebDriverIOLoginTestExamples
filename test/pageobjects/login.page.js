
import Page from './page'

/**
 * selectors and methods for login page
 */
class LoginPage extends Page {
  get emailInput () { return $('#email') }
  get forgotPasswordLink () { return $('=Forgot Password') }
  get headingErrorText () { return $('.bodySmall') }
  get loginButton () { return $('[data-testid="login-button"]') }
  get passwordInput () { return $('#password') }
  get rememberMeCheckBox () { return $('#remember_me') }

  get url () { return this.ssoBaseUrl + '/login' }
}

export default new LoginPage()
