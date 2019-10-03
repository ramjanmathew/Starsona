module.exports = {
  'Sign Up as a fan' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Sign Up")]')
      .click('xpath','//div[@class="jss11 jss9"]//div[2]')
      .click('xpath','//*[contains(@class,"svg-inline--fa fa-envelope fa-w-16")]')
      .setValue('input[name=firstName]', 'Jackson')
      .setValue('input[name=lastName]', 'Daniel')
      .setValue('input[name=email]', 'rahulj+21@qburst.com')
      .setValue('input[name=password]', '1234567@')
      .setValue('input[name=confirmPassword]', '1234567@')
      .click('button[type=submit]')
      .pause(1000)
      .useXpath()
      .assert.visible('//div[contains(@class,"success-fan sc-dphlzf hAWyaW")]')
      .end();
  },
  
};