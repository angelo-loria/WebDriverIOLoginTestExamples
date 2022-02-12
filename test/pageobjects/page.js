/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
  async open (path) {
    await browser.url(path)
  }

  /**
   * Generate random email string using result of Data.now() and base36 conversion
   * @returns string - random email
   */
  getRandomEmail () {
    return Date.now().toString(36) + '@test.com'
  }
}
