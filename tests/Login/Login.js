var XLSX = require('xlsx');
var range = { s: { c: 0, r: 0 }, e: { c: 10, r: 10 } };
var workbook = XLSX.readFile('/home/rahul/Documents/Starsona-Automation/Nightwatch/tests/Assets/Comments.xlsx');
var fan_email = [];
var password = [];
var sheet_name_list = workbook.SheetNames;
module.exports = {
  'Login with right credentials' : function (client) {
    const page = client.page.login_object();
    page
      .navigate()
  sheet_name_list.forEach(function(y) {

    worksheet = workbook.Sheets[y];
        for (var R = range.s.r; R <= range.e.r; ++R) 
        {
            for (var C = range.s.c; C <= range.e.c; ++C) 
          {
              var cell_address = { c: C, r: R };
              var data = XLSX.utils.encode_cell(cell_address);
              var z = worksheet[data];
              
              if(z == undefined) continue;
              else
              {
              if(data.startsWith('A'))
            { fan_email.push(worksheet[data].v);
            }
            else if(data.startsWith('D')){
                password.push(worksheet[data].v);
            }
          }
        }
      }
  for(var i=0;i<fan_email.length;i++)
    {
      page
      .login(fan_email[i],password[i])
        .assert.containsText('body','Featured')
        .logout()
        .assert.containsText('body','Personalized Videos From the Stars');
  }
page
.end()
});
  }
}