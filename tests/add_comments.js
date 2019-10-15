var XLSX = require('xlsx');
var workbook = XLSX.readFile('/home/rahul/Documents/Starsona-Automation/Nightwatch/tests/Comments.xlsx');
var sheet_name_list = workbook.SheetNames;
var range = { s: { c: 0, r: 0 }, e: { c: 10, r: 10 } };
var fan_email = [];
var star_profile = [];
var video = [];
module.exports = {
  'Adding Comments to star videos 1' : function (client) {
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
    for(var i=0;i<fan_email.length;i++)
      {
        
    client
      .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', fan_email[j])
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .url(star_profile[i])
      .pause(3000)
       .click(video[k])
          .element('xpath',video[k],function(result){
            if(result.status !=-1)
            {
              client
      .pause(5000)
      .element('xpath', '//textarea[@placeholder="Comment on this video"]', function(result){
        if(result.status != -1){
            //Element exists, do something
            client
            .setValue('//textarea[@placeholder="Comment on this video"]','Thank you for the video')
            .click('//*[@class="svg-inline--fa fa-telegram-plane fa-w-14 message-icon comment-icon"]')
            .pause(1000)
        }
      });
      client
      .click('//span[@class="sc-jTzLTM iiQZkV"]')
    }
  });
  client
      .click('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/header[1]/div[1]/div[3]/span[1]/button[1]')
      .pause(2000)
      .click('//span[@class="log-out"]')
      .pause(3000)
    }
  }
}
  client
  .end()
});
    }
}