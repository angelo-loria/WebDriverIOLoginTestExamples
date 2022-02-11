import HomePage from '../pageobjects/home.page'

describe('login page', () => {
  it('should login with valid credentials', async () => {
    await HomePage.open()
  })
})
