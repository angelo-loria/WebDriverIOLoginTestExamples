
import Page from './page'

/**
 * selectors and methods for reset password page
 */
class ResetPasswordPage extends Page {
  get containerHeading () { return $('.heading4') }
  get emailInput () { return $('#email') }
  get emailToReceiveResetText () { return $('.bodySmallSemiBold output') }
  get emailSentNotification () { return $('.bodyMainBold=Email sent') }
  get nextButton () { return $('[data-testid="login-button"]') }
  get resendEmailButton () { return $('.button=Resend Email') }
  get url () { return 'https://sso.zeachable.com/secure/123/identity/forgot_password' }
}

export default new ResetPasswordPage()
