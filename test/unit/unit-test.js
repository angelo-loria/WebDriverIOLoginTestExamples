import MockAdapter from 'axios-mock-adapter'
import Page from '../pageobjects/page'
import assert from 'assert'
import axios from 'axios'

describe('unit test', () => {
  const page = new Page()
  const url = 'foo.com/test'
  const mock = new MockAdapter(axios)

  it('page.getStatusCode positive', async () => {
    mock.onGet(url).reply(200)

    const resp = await page.getStatusCode(url)
    assert.strictEqual(resp, 200)
  })

  it('page.getStatusCode negative', async () => {
    mock.onGet(url).reply(404)

    try {
      await page.getStatusCode(url)
    } catch (err) {
      assert.strictEqual(err.message, 'Request failed with status code 404')
    }
  })

  it('page.isLinkStatusOk positive', async () => {
    mock.onGet(url).reply(200)

    const resp = await page.isLinkStatusOk(url)
    assert.strictEqual(resp, true)
  })

  it('page.isLinkStatusOk negative', async () => {
    mock.onGet(url).reply(404)

    try {
      await page.isLinkStatusOk(url)
    } catch (err) {
      assert.strictEqual(err.message, 'Request failed with status code 404')
    }
  })

  it('page.getRandomEmail', async () => {
    const regex = /^[a-zA-Z0-9_]+@test\.com$/
    const email = page.getRandomEmail()
    assert.match(email, regex)
  })
})
