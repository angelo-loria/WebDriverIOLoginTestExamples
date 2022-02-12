import axios from 'axios'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  /**
   * Gets urls of links on page
   * @returns {Array} link urls
   */
  async getLinks () {
    return await $$('a').map(link => link.getAttribute('href'))
  }

  /**
   * Makes get request to url and returns status code
   * @param {string} url
   * @returns {number} status code
   */
  async getStatusCode (url) {
    const resp = await axios.get(url)
    return resp.status
  }

  /**
   * checks for response code of 200 on link
   * @param {string} link
   * @returns {boolean}
   */
  async isLinkBroken (link) {
    const status = await this.getStatusCode(link)
    return (status === 200)
  }

  /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
  async open (path) {
    await browser.url(path)
  }

  /**
   * Generate random email string using result of Data.now() and base36 conversion
   * @returns {string} - random email
   */
  getRandomEmail () {
    return Date.now().toString(36) + '@test.com'
  }
}
