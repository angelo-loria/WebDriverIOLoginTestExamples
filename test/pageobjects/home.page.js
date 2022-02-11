
import Page from './page'

/**
 * selectors and methods for home page
 */
class HomePage extends Page {
  get loginButton () { return $('=Login') }
  get signUpButton () { return $('=Sign Up') }
  get title () { return 'Homepage | takehome' }

  async open () {
    await super.open('/')
  }
}

export default new HomePage()
