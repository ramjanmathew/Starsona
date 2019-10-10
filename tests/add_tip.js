module.exports = {
  'Adding $5 Tip to star videos 1' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Log In")]')
      .setValue('input[name=email]', 'rahulj+1@qburst.com')
      .setValue('input[name=password]', '1234567@')
      .useXpath()
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/johnnybravo')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .pause(1000)
      .click('//li[@id="tip 5"]')
      .pause(1000)
      .click('//span[@class="cardNo"]')
      .click('//button[@class="common-btn button sc-kpOJdX lfXDAS"]')
      .waitForElementVisible('//button[@class="common-btn browseBtn sc-kpOJdX lfXDAS"]')
      .end();
  },
  'Adding $10 Tip to star videos 1' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+2@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/johnnybravo')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//li[@id="tip 10"]')
      .click('//li[@id="tip 10"]')
      .pause(1000)
      .click('//span[@class="cardNo"]')
      .click('//button[@class="common-btn button sc-kpOJdX lfXDAS"]')
      .waitForElementVisible('//button[@class="common-btn browseBtn sc-kpOJdX lfXDAS"]')
      .end();
  },
  'Adding $20 Tip to star videos 1' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+2@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/johnnybravo')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//li[@id="tip 10"]')
      .click('//li[@id="tip 20"]')
      .pause(1000)
      .click('//span[@class="cardNo"]')
      .click('//button[@class="common-btn button sc-kpOJdX lfXDAS"]')
      .waitForElementVisible('//button[@class="common-btn browseBtn sc-kpOJdX lfXDAS"]')
      .end();
  },

};