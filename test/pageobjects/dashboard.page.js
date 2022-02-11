
import Page from './page'

/**
 * selectors and methods for dashboard/home page when logged in
 */
class DashboardPage extends Page {
  get loginButton () { return $('=Login') }
  get signedInDirectoryDiv () { return $('.signed-in-directory') }
  get title () { return 'takehome' }

  async open () {
    await super.open('/')
  }
}

export default new DashboardPage()
