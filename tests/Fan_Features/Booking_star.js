var XLSX = require('xlsx');
var workbook = XLSX.readFile('/home/rahul/Documents/Starsona-Automation/Nightwatch/tests/Assets/Booking stars_by fan.xlsx');
var sheet_name_list = workbook.SheetNames;
var range = { s: { c: 0, r: 0 }, e: { c: 10, r: 10 } };
var url = [];
var email = [];
var name = ['Gordon','Michael','George','John','Mike','Shawn','Saun','Noah','Pat','Andrew'];
var relation = ['Father','Brother','Grandfather','Friend','Coworker']

module.exports = {
    'Booking Star by fan' : function (client) {
      const page = client.page.bookingStarObject();
    page
      .navigate()
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
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
        { url.push(worksheet[data].v);
        }
        else if(data.startsWith('B')){
            email.push(worksheet[data].v);
        }
      }
    }
  } for(var j=0;j<email.length;j++)
      {
        page
      .login(email[j])
      for(var i=0;i<url.length;i++)
      {
      page
      .api.url(url[i]);
      page
      .booking(name[Math.floor(Math.random() * name.length)],name[Math.floor(Math.random() * name.length)],relation[Math.floor(Math.random() * relation.length)])
      }
      page
      .logout()
      .assert.containsText('body','Personalized Videos From the Stars')
      
    }
      page.end()
});
    }
}