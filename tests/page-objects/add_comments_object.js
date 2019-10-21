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
        selector:'//span[@class="sc-iujRgT fQijFi"]'
      },
      logoutButton:{
        locateStrategy: 'xpath',
        selector:'//span[@class="log-out"]'
      },
      commentField:{
          locateStrategy:'xpath',
          selector:'//textarea[@placeholder="Comment on this video"]'
      },
      sentComment:{
          locateStrategy:'xpath',
          selector:'//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]'
      },
      close:{
          locateStrategy:'xpath',
          selector:'//span[@class="sc-jTzLTM iiQZkV"]'
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
        comment(comment){
            return this
            .setValue('@commentField',comment)
            .click('@sentComment')
            .pause(3000)
            .click('@close')
            .pause(1000)
        },
        noComment(){
            return this.click('@close')
        },
        logout(){
            return this
            .click('@profileButton')
            .pause(2000)
            .click('@logoutButton')
            .pause(3000)

        }
    }]
};