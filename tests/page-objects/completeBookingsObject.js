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
      bookingButton: {
          locateStrategy:'xpath',
          selector:'//a[contains(text(),"Bookings")]'
    },
      remainingBookingButton: {
            locateStrategy:'xpath',
            selector:'//span[contains(@class,"info-text")]'
    },
    bookingSpan:{
        locateStrategy:'xpath',
        selector:'/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/section[1]/span[1]'
    },
      bookings:{
        locateStrategy:'xpath',
        selector:'//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/section[1]'
    },
    fileUpload:'#fileUpload',
    bookingCompleteButton:{
        locateStrategy:'xpath',
        selector:'//*[@id="content-wrapper"]/div[2]/div/div[2]/div/div/div/section/section/section[2]/section/button'
},
      profileButton: {
        locateStrategy: 'xpath',
        selector:'//*[@id="content-wrapper"]/div[2]/header/div[1]/div[3]/span/button'
      },
      bookingCloseButton: {
        locateStrategy: 'xpath',
        selector:'//span[@class="closeBtn sc-jTzLTM kUcnxM"]'
    },
      logoutButton:{
        locateStrategy: 'xpath',
        selector:'//span[@class="log-out"]'
      }
    },
    commands:[{
        completeBookings(email){
            return this
                .click('@loginButton')
                .setValue('@emailField', email)
                .setValue('@passwordField', '1234567@')
                .click('@submitButton')
                .pause(3000)
                .click('@bookingButton')
                .pause(3000)
        },
            checkBooking(video){
                    return this
                            .pause(1000)
                            .click('@remainingBookingButton')
                            .click('@bookings')
                            .pause(2000)
                            .setValue('@fileUpload', require('path').resolve(video))
                            .click('@bookingCompleteButton')
                            .pause(22000)
                            .click('@bookingCloseButton')
                            .click('@logoutButton')
                },
                logout(){
                    return this
                    .click('@logoutButton')
                }
    }]
};