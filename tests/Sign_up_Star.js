module.exports = {
  'Signup as a star' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Sign Up")]')
      .useXpath()
      .click('//div[@class="jss11 jss9"]//div[3]')
      .click('//*[contains(@class,"svg-inline--fa fa-envelope fa-w-16")]')
      .setValue('//input[@name="firstName"]', 'John')
      .setValue('//input[@name="lastName"]', 'Cena')
      .setValue('//input[@name="email"]', 'rahulj+100@qburst.com')
      .useXpath()
      .click('//span[contains(@class,"checkmark")]')
      .pause(1000)
      .click('//button[contains(@class,"sc-kpOJdX lfXDAS")]')
      .pause(1000)
      .setValue('//input[@id="profile"]', require('path').resolve('/home/rahul/Desktop/im-a-celebrity-main-t.jpg'))
      .waitForElementVisible('//span[contains(text(),"I like it, continue")] ', 2000)
      .click('//button[contains(@class,"common-btn button sc-kpOJdX lfXDAS")]')
      .pause(1000)
      .click('//button[@id="profilePic"]')
      .click('//li[contains(text(),"Movies / TV")]')
      .click('//li[contains(text(),"Actor")]')
       .click('//button[@id="category-id-web"]')
      .click('//button[contains(@class,"sc-kpOJdX lfXDAS")]')
      .pause(1000)
      .click('/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/span[1]')
      .setValue('//input[contains(@placeholder,"What is your referral code?")]', '911')
      .pause(1000)
      .click('//button[contains(@class,"sc-kpOJdX lfXDAS")]')
      .pause(1000)
      .click('//button[@id="setprice"]')
      .pause(1000)
      .click('//span[contains(@class,"skip")]')
      .pause(3000)
  }

};