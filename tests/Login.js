module.exports = {
  'Login with right credentials' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Log In")]')
      .setValue('input[name=email]', 'rahulj+1@qburst.com')
      .setValue('input[name=password]', '1234567@')
      .click('button[type=submit]')
      .pause(3000)
      .assert.containsText('body','Featured Stars Title')
      .end();
  },
  'Login with fake credentials' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Log In")]')
      .setValue('input[name=email]', 'rahulj@qburst.com')
      .setValue('input[name=password]', '1234567@')
      .click('button[type=submit]')
      .pause(2000)
      .useXpath()
      .assert.visible('//div[@class="email-heading sc-ibxdXY gokLSx"]')
      .end();
  }
};