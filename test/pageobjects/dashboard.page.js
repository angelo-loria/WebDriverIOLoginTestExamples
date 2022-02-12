
import Page from './page'

/**
 * selectors and methods for dashboard/home page when logged in
 */
class DashboardPage extends Page {
  get bannerWarning () { return $('div.bodyMain.alert-banner div.m-l-3-xs') }
  get loginButton () { return $('=Login') }
  get signedInDirectoryDiv () { return $('.signed-in-directory') }
  get title () { return 'takehome' }

  async open () {
    await super.open('/')
  }
}

export default new DashboardPage()
