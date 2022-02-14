import axios from 'axios'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  get ssoBaseUrl () { return 'https://sso.zeachable.com/secure/123/identity' }

  /**
   * gets urls of links on page
   * @returns {Array} link urls
   */
  async getLinkUrls () {
    return await $$('a').map(link => link.getAttribute('href'))
  }

  /**
   * makes get request to url and returns status code
   * @param {string} url
   * @returns {number} status code
   */
  async getStatusCode (url) {
    const resp = await axios.get(url)
    return resp.status
  }

  /**
   * checks for response code of 200 on link
   * @param {string} url
   * @returns {boolean}
   */
  async isLinkStatusOk (url) {
    const status = await this.getStatusCode(url)
    return (status === 200)
  }

  /**
    * opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
  async open (path) {
    await browser.url(path)
  }

  /**
   * generate random email string using result of Data.now() and base36 conversion
   * @returns {string} - random email
   */
  getRandomEmail () {
    return Date.now().toString(36) + '@test.com'
  }
}
