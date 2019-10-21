var category = ['Sports','Movies / TV','Music','Radio / Podcast','Social / YouTube','Comedians','Everyday Stars','Imitators'];
var firstName = ['Jackson','Michael','George','Margret','Greta','Gordon','Janet'];
var lastName = ['Cooper','Donis','Doris','Stan','Kripten','Samson','Hodre'];
var rand = ['1','2','3','4','5','6','8','9'];
var email = 'rahulj+1@qburst.com';
module.exports = {
  'Signup as a star' : function (client) {
    client
     const page = client.page.signUp_object();
     page
      .navigate()
      var str = email.split("@");
      email = str[0]+rand[Math.floor(Math.random() * firstName.length)]+rand[Math.floor(Math.random() * firstName.length)]+rand[Math.floor(Math.random() * firstName.length)]+"@"+str[1];
      page
      .signUpStar(firstName[Math.floor(Math.random() * firstName.length)],lastName[Math.floor(Math.random() * lastName.length)],email)
        .assert.containsText('body','Welcome to Starsona')
        .end();
  }
};