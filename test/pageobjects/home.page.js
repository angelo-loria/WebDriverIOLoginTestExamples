
import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  get loginButton () { return $('=sign_in') }

  async open () {
    await super.open('/')
  }
}

export default new HomePage()
