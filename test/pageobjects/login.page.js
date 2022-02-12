
import Page from './page'

/**
 * selectors and methods for login page
 */
class LoginPage extends Page {
  get emailInput () { return $('#email') }
  get forgotPasswordLink () { return $('=Forgot Password') }
  get loginButton () { return $('[data-testid="login-button"]') }
  get passwordInput () { return $('#password') }

  get url () { return 'https://sso.zeachable.com/secure/123/identity/login' }
}

export default new LoginPage()
