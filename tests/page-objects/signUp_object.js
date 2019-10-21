module.exports = {
    url: "https://starsona-dev.qburst.build/",
    elements:{
        signUpButton: {
            locateStrategy:'xpath',
            selector:'//button[contains(text(),"Sign Up")]'
        },
        sign_up_fan:{
            locateStrategy:'xpath',
            selector:'//div[@class="jss11 jss9"]//div[2]'
        },
        sign_up_star:{
            locateStrategy:'xpath',
            selector:'//div[@class="jss11 jss9"]//div[3]'
        },
        sign_up_email_icon:{
            locateStrategy:'xpath',
            selector:'//*[contains(@class,"svg-inline--fa fa-envelope fa-w-16")]'
        },
        firstNameField:'input[name=firstName]',
        lastNameField: 'input[name=lastName]',
        emailField: 'input[name=email]',
        passwordField:'input[name=password]',
        confirmPasswordField:'input[name=confirmPassword]',
        sign_up_fan_submit_button:'button[type=submit]',
        sign_up_fan_close_button:{
            locateStrategy:'xpath',
            selector:'//span[@class="sc-jTzLTM kUcnxM"]'
        },
        checkmark:{
            locateStrategy:'xpath',
            selector:'//span[contains(@class,"checkmark")]'
        },
        sign_up_star_email_continue_button:{
            locateStrategy:'xpath',
            selector:'//button[contains(@class,"sc-kpOJdX lfXDAS")]'
        },
        profile_pic:{
            locateStrategy:'xpath',
            selector: '//input[@id="profile"]'
        },
        i_like_it_continue_button:{
            locateStrategy:'xpath',
            selector:'//button[@class="common-btn button sc-kpOJdX lfXDAS"]'
        },
        sign_up_star_image_continue_button:{
            locateStrategy:'xpath',
            selector:'//button[@id="profilePic"]'
        },
        sign_up_star_category_continue_button:{
            locateStrategy:'xpath',
            selector:'//button[@id="category-id-web"]'
        },
        skip_button: {
            locateStrategy:'xpath',
            selector:'//span[@class="skip"]'
        },
        skip_welcome_video:{
            locateStrategy:'xpath',
            selector:'//button[@id="skip-welcome-video"]'
        },
        referral_code_button:{
            locateStrategy:'xpath',
            selector:'/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/span[1]'
        },
        referral_code_field:{
            locateStrategy:'xpath',
            selector:'//input[contains(@placeholder,"What is your referral code?")]'
        },
        referral_code_continue: {
            locateStrategy:'xpath',
            selector:'//button[@id="referralCode"]'
        },
        sign_up_price_continue_button:{
            locateStrategy:'xpath',
            selector:'//button[@id="setprice"]'
        },
        profileButton: {
            locateStrategy: 'xpath',
            selector:'//span[@class="sc-TOsTZ dggTBr"]'
        },
        logoutButton:{
            locateStrategy: 'xpath',
            selector:'//span[@class="log-out"]'
        },
    },
    commands:[{
        signUpFan(firstName,lastName,email,password){
            return this
        .click('@signUpButton')
        .click('@sign_up_fan')
        .click('@sign_up_email_icon')
        .setValue('@firstNameField', firstName)
        .setValue('@lastNameField', lastName)
        .setValue('@emailField', email)
        .setValue('@passwordField', password)
        .setValue('@confirmPasswordField', password)
        .click('@sign_up_fan_submit_button')
        .pause(1000)
        },
        logout(){
            return this
        .click('@sign_up_fan_close_button')
        .click('@profileButton')
        .pause(2000)
        .click('@logoutButton')

        },
        signUpStar(firstName,lastName,email){
            return this
        .click('@signUpButton')
        .click('@sign_up_star')
        .click('@sign_up_email_icon')
        .setValue('@firstNameField',firstName)
        .setValue('@lastNameField',lastName)
        .setValue('@emailField',email)
        .click('@checkmark')
        .pause(1000)
        .click('@sign_up_star_email_continue_button')
        .pause(1000)
        .setValue('@profile_pic', require('path').resolve('/home/rahul/Desktop/im-a-celebrity-main-t.jpg'))
        .waitForElementVisible('@i_like_it_continue_button', 2000)
        .click('@i_like_it_continue_button')
        .pause(1000)
        .click('@sign_up_star_image_continue_button')
        .click('xpath','//li[contains(text(),"Sports")]')
        .click('xpath','/html[1]/body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]')
        .click('@sign_up_star_category_continue_button')
        .click('@skip_button')
        .pause(1000)
        .click('@skip_welcome_video')
        .click('@referral_code_button')
        .setValue('@referral_code_field', '911')
        .pause(1000)
        .click('@referral_code_continue')
        .pause(1000)
        .click('@sign_up_price_continue_button')
        .pause(1000)
        .click('@skip_button')
        .pause(3000)
        }
    }]
};