module.exports = {
  'Signup as a star' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Sign Up")]')
      .useXpath()
      .click('/html/body/div[5]/div[2]/div/div/div/div/div/div/div/div/div[3]/span[1]')
      .click('//*[contains(@class,"svg-inline--fa fa-envelope fa-w-16")]')
      .setValue('input[name=firstName]', 'Tester')
      .setValue('input[name=lastName]', 'D')
      .setValue('input[name=email]', 'karthattilrahul+51@yopmail.com')
      .useXpath()
      .click('//span[contains(@class,"checkmark")]')
      .pause(1000)
      .click('//button[contains(@class,"sc-kpOJdX lfXDAS")]')
      .waitForElementVisible('//div[contains(@class,"css-1hwfws3 select__value-container select__value-container--is-multi")]', 2000)
      .setValue('//input[@id="profile"]', require('path').resolve('/home/rahul/Desktop/im-a-celebrity-main-t.jpg'))
      .waitForElementVisible('//span[contains(text(),"I like it, continue")] ', 2000)
      .click('//button[contains(@class,"common-btn button sc-kpOJdX lfXDAS")]')
      .pause(1000)
      .click('//span[contains(@class,"sc-FQuPU bEGXhb")]')
      .click('//li[contains(text(),"Movies / TV")]')
      .click('//li[contains(text(),"Actor")]')
       .click('//div[contains(@class,"sc-bbkauy ivJpdz")]//span[contains(@class,"sc-VigVT iBJrSa")]')
      .click('//button[contains(@class,"sc-kpOJdX lfXDAS")]')
      .pause(1000)
      .click('//button[contains(@class,"common-btn button sc-kpOJdX lfXDAS")]')
      .click('//span[contains(@class,"sc-dPPMrM jOOzuR")]')
      .setValue('//input[contains(@placeholder,"What is your referral code?")]', '911')
      .pause(1000)
      .click('//button[contains(@class,"sc-kpOJdX lfXDAS")]')
      .pause(1000)
      .click('//button[contains(@class,"sc-kpOJdX lfXDAS")]')
      .pause(1000)
      .click('//span[contains(@class,"skip")]')
      .pause(3000)
  }

};