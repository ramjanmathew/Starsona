var XLSX = require('xlsx');
var range = { s: { c: 0, r: 0 }, e: { c: 10, r: 10 } };
var workbook = XLSX.readFile('/home/rahul/Documents/Starsona-Automation/Nightwatch/tests/Assets/Comments.xlsx');
var fan_email = [];
var star_profile = [];
var video = [];
var comment = ['Thank you','Thank you for the video','Best of Luck','Thanks for the headsup','You are the best','You the mvp!!','You rock!!','This is fantastic','This is nice!']
var sheet_name_list = workbook.SheetNames;
module.exports = {
  'Adding Comments to star videos' : function (client) {
    const page = client.page.add_comments_object();
    page
    .navigate()
    .resizeWindow(1200, 1000)
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
    
    for(var k=0;k<video.length;k++)
    {
    for(var j=0;j<fan_email.length;j++)
    {
      page
      .login(fan_email[j])
    for(var i=0;i<fan_email.length;i++)
      {
        page
      .assert.containsText('body','Featured')
      .api.url(star_profile[i]);
      page
      .pause(4000)
      .api.element('css selector',video[k],function(result){
        if(result.status !=-1)
        {  page
          .click('#video-1')
          .pause(2000)
          .api.element('xpath','//textarea[@placeholder="Comment on this video"]',function(result){
            if(result.status !=-1)
            {  page
              .comment(comment[Math.floor(Math.random() * comment.length)])
            }
            else{
              page
              .noComment()
            }
          });
        }
      });
      }
      page
      .logout()
  }
}
  page
  .end()
});
    }
}