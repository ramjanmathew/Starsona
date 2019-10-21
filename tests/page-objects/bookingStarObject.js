module.exports = {
    url: "https://starsona-dev.qburst.build/",
    elements:{
     loginButton: {
         locateStrategy:'xpath',
         selector:'//button[contains(text(),"Log In")]'
        },
      emailField:'input[name=email]',
      passwordField: 'input[name=password]',
      submitButton: 'button[type=submit]',
      profileButton: {
        locateStrategy: 'xpath',
        selector:'//*[@id="content-wrapper"]/div[2]/header/div[1]/div[3]/span/button'
      },
      logoutButton:{
        locateStrategy: 'xpath',
        selector:'//span[@class="log-out"]'
      },
    bookingStarButton:{
        locateStrategy: 'xpath',
        selector:'//button[@class="common-btn action-button sc-kpOJdX lfXDAS"]'
    },
    shoutout:{
        locateStrategy: 'xpath',
        selector:'//section[@class="booking-shoutout sc-htoDjs dFpgpj"]'//'//section[@id="shout-out-category"]'
    },
    events:{
        locateStrategy: 'xpath',
        selector:'//li[contains(text(),"Birthday")]'
    },
    dropdown:{
        locateStrategy:'xpath',
        selector:'//section[@class="dropdown-wrapper sc-dnqmqq dbIXmq"]'
    },
    to:{
        locateStrategy: 'xpath',
        selector:'/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[1]/div[1]/div[1]/input[1]'
    },
    from:{
        locateStrategy: 'xpath',
        selector:'/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[2]/div[1]/div[1]/input[1]'
    
    },
    relationship:{
        locateStrategy:'xpath',
        selector:'/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/input[1]'
    },
    dateField:{
        locateStrategy:'xpath',
        selector:'/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]'
    },
    date:{
        locateStrategy:'xpath',
        selector:'/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[5]/div[5]'
    
    },
    continueInput:{
        locateStrategy:'xpath',
        selector:'//button[@class="common-btn continue-button sc-kpOJdX lfXDAS"]'
    },
    continueScript:{
        locateStrategy:'xpath',
        selector:'//button[@id="booking-script"]'
    },
    cardNo:{
        locateStrategy:'xpath',
        selector:'//span[contains(@class,"cardNo")]'
    },
    bookingPayment:{
        locateStrategy:'xpath',
        selector:'//button[@id="booking-payment"]'
    },
    close:{
        locateStrategy:'xpath',
        selector:'//span[@class="closeBtn sc-jTzLTM kUcnxM"]'
    },
    profileButton: {
        locateStrategy: 'xpath',
        selector:'//span[@class="sc-iujRgT fQijFi"]'
      },
      logoutButton:{
        locateStrategy: 'xpath',
        selector:'//span[@class="log-out"]'
      }
    },
    commands:[{
        login(email){
            return this
            .click('@loginButton')
            .setValue('@emailField', email)
            .setValue('@passwordField', '1234567@')
            .click('@submitButton')
            .pause(3000)
            

        },
        booking(name,name1,relation){
            return this
            .click('@bookingStarButton')
            .click('@shoutout')
            .pause(2000)
            .click('@dropdown')
            .click('@events')
            .setValue('@to',name)
            .clearValue('@from')
            .setValue('@relationship',relation)
            .click('@dateField')
            .click('@date')
            .pause(1000)
            .click('@continueInput')
            .pause(2000)
            .waitForElementVisible('@continueScript')
            .click('@continueScript')
            .waitForElementVisible('@cardNo')
            .click('@cardNo')
            .click('@bookingPayment')
            .pause(3000)
            
        },
        logout(){
            return this
            .click('@close')
            .click('@profileButton')
            .pause(2000)
            .click('@logoutButton')
            .pause(3000)
        }
    }]
};