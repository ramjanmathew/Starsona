abortOnFailure = false;
module.exports = {
  'Complete Booking by star' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Log In")]')
      .setValue('input[name=email]', 'rahulj+sanjay@qburst.com')
      .setValue('input[name=password]', '1234567@')
      .useXpath()
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .click('//a[contains(text(),"Bookings")]')
      .pause(3000)
      .click('//span[contains(@class,"info-text")]')
      .click('//section[@id="Le32oxd6"]')
      .pause(2000)
      .setValue('//*[@id="fileUpload"]', require('path').resolve('/home/rahul/Downloads/Super_30__Official_Trailer__Hrithik_Roshan__Vikas_Bahl__July_12.mp4'))
      .click('//*[@id="content-wrapper"]/div[2]/div/div[2]/div/div/div/section/section/section[2]/section/button')
      .pause(10000)
      .waitForElementVisible
      .end();
  }
};