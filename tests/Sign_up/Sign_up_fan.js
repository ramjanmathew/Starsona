var firstName = ['Jackson','Michael','George','Margret','Greta','Gordon','Janet'];
var lastName = ['Cooper','Donis','Doris','Stan','Kripten','Samson','Hodre'];
var rand = ['1','2','3','4','5','6','8','9'];
var email = 'rahulj+1@qburst.com';
var password = '1234567@';
module.exports = {
  'Sign Up as a fan' : function (client) {
    client
     const page = client.page.signUp_object();
     page
      .navigate()
      var str = email.split("@");
      email = str[0]+rand[Math.floor(Math.random() * firstName.length)]+rand[Math.floor(Math.random() * firstName.length)]+rand[Math.floor(Math.random() * firstName.length)]+"@"+str[1];
      page
      .signUpFan(firstName[Math.floor(Math.random() * firstName.length)],lastName[Math.floor(Math.random() * lastName.length)],email,password)
        .assert.containsText('body','Welcome to Starsona')
        .logout()
        .assert.containsText('body','Personalized Videos From the Stars')
        .end();
  }
};