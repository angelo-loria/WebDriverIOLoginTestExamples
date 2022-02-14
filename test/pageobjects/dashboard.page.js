
import Page from './page'

/**
 * selectors and methods for dashboard/home page when logged in
 */
class DashboardPage extends Page {
  get bannerWarning () { return $('div.bodyMain.alert-banner div.m-l-3-xs') }
  get profileDropdownButton () { return $('li.dropdown') }
  get loginButton () { return $('=Login') }
  get signedInDirectoryDiv () { return $('.signed-in-directory') }
  get title () { return 'takehome' }

  async open () {
    await super.open('/')
  }

  /**
   * opens profile dropdown and clicks link
   * @param {string} linkText text of link to click
   */
  async clickProfileDropdownLink (linkText) {
    await this.profileDropdownButton.click()
    await this.profileDropdownButton
      .$('ul.dropdown-menu')
      .$(`=${linkText}`)
      .click()
  }
}

export default new DashboardPage()
