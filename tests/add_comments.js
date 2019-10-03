module.exports = {
  'Adding Comments to star videos 1' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Log In")]')
      .setValue('input[name=email]', 'rahulj+1@qburst.com')
      .setValue('input[name=password]', '1234567@')
      .useXpath()
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .moveTo('//div[contains(@class,"sc-dznXNo ghKWgF")]',100,110)
      .pause(5000)
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Thank you for the video')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
  'Adding Comments to star videos 2' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+2@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Awesome')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
  'Adding Comments to star videos 3' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+21@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Great Work!!!!')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
    'Adding Comments to star videos 4' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+lion@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Great Work!!!!')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
  'Adding Comments to star videos 5' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+johnny@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Great Work!!!!')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
  'Adding Comments to star videos 6' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+56@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Great Work!!!!')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
  'Adding Comments to star videos 7' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+lady@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Great Work!!!!')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
  'Adding Comments to star videos 8' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+kanye@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Great Work!!!!')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
  'Adding Comments to star videos 9' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+tievo@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Great Work!!!!')
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
'Adding Comments to star videos 10' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', 'rahulj+sanjay@qburst.com')
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url('https://starsona-dev.qburst.build/ranveersingh')
      .pause(3000)
      .click('//div[@id="video-0"]')
      .waitForElementVisible('//textarea[@placeholder="Comment on this video"]')
      .setValue('//textarea[@placeholder="Comment on this video"]','Great Work!!!!')
      .moveTo(null,100,110)
      .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
      .pause(1000)
      .end();
  },
  /*'Adding tip to star videos' : function (client) {
    client
      .url('https://starsona-dev.qburst.build')
      .waitForElementVisible('body', 1000)
      .click('xpath','//button[contains(text(),"Log In")]')
      .setValue('input[name=email]', 'rahulj+2@qburst.com')
      .setValue('input[name=password]', '1234567@')
      .click('button[type=submit]')
      .pause(3000)
      .assert.containsText('body','Featured Stars Title')
      .useXpath()
      .click('//span[@id="name-ranveersingh-"]')
      .click('//div[@id="video-0"]')
      .click('/html/body/div[3]/div[2]/div/div/div/div/div/div[1]/div/div[1]/div/div/div[2]/div[1]/div/div[2]/div[2]/ul/li[3]')
      .click('//button[@class="sc-eerKOB clrgcQ"]')
       .click('//li[@class="sc-kqlzXE eZRVCC"]')
       .click('//button[@class="common-btn button sc-kpOJdX lfXDAS"]')
       .waitForElementVisible('//button[@class="common-btn browseBtn sc-kpOJdX lfXDAS"]')
      .pause(1000)
      .end();
    }*/
};