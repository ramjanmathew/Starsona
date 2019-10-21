var XLSX = require('xlsx');
var range = { s: { c: 0, r: 0 }, e: { c: 10, r: 10 } };
var workbook = XLSX.readFile('/home/rahul/Documents/Starsona-Automation/Nightwatch/tests/Assets/Comments.xlsx');
var fan_email = [];
var star_profile = [];
var video = [];
var sheet_name_list = workbook.SheetNames;
var obj = require('../page-objects/add_comments_object.js')
module.exports = {
  '@tags':['add_comments'],
  before: function(browser){
    obj(browser).openBrowser();
  },
  'Adding Comments to star videos' : function (client) {
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
              else if(data.startsWith('B')){
                  star_profile.push(worksheet[data].v);
              }
              else if(data.startsWith('C')){
                video.push(worksheet[data].v)
              }
            }
          }
        }
    
    for(var k=0;k<sheet_objects.fan_email.length;k++)
    {
    for(var j=0;j<sheet_objects.fan_email.length;j++)
    {
    for(var i=0;i<sheet_objects.fan_email.length;i++)
      {
    obj(client).addComments();
    }
  }
}
  client
  .end()
});
    }
}