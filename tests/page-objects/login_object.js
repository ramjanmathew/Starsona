module.exports = {
    url: "https://starsona-dev.qburst.build/",
    elements:{
     loginButton: '#content-wrapper > div > div > header > div > div.header-actions.sc-hzDkRC.iMXiCh > button:nth-child(3)',
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
      }
    },
    commands:[{
        login(email,password){
            return this
            .click('@loginButton')
            .setValue('@emailField', email)
            .setValue('@passwordField', password)
            .click('@submitButton')
            .pause(3000)
            

        },
        logout(){
            return this
            .click('@profileButton')
            .pause(2000)
            .click('@logoutButton')

        }
    }]
};