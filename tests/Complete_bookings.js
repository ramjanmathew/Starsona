var XLSX = require('xlsx');
var workbook = XLSX.readFile('/home/rahul/Documents/Starsona-Automation/Nightwatch/tests/Booking stars_by fan.xlsx');
var sheet_name_list = workbook.SheetNames;
var range = { s: { c: 0, r: 0 }, e: { c: 10, r: 10 } };
var email = [];
var booking = [];
var video = ['/home/rahul/Downloads/Video/Johnny_Bravo_-_Beach_Blanket_Bravo.mp4','/home/rahul/Downloads/Video/Kanye_West__Lil_Pump_ft_Adele_Givens_-_I_Love_It_Official_Music_Video.mp4',
'/home/rahul/Downloads/Video/Lady_Gaga_Bradley_Cooper_-_Shallow_A_Star_Is_Born.mp4','/home/rahul/Downloads/Video/Love_Action_Drama__Official_Teaser__Nivin_Pauly_Nayanthara__Dhyan_Sreenivasan__Shaan_Rahman_HD.mp4'];
module.exports = {
  'Complete Booking by star 1' : function (client) {
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
            if(data.startsWith('D'))
          { email.push(worksheet[data].v);
          }
          else if(data.startsWith('C')){
              booking.push(worksheet[data].v);
          }
        }
      }
    }
for(var j=0;j<email.length;j++)
    {
    for(var i=0;i<booking.length;i++)
      { client
        .url('https://starsona-dev.qburst.build')
      .click('xpath','//button[contains(text(),"Log In")]')
      .useXpath()
      .setValue('//input[@name="email"]', email[j])
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(3000)
      .click('//a[contains(text(),"Bookings")]')
      .pause(3000)
      .click('//span[contains(@class,"info-text")]')
      .click('//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/section[1]')
      .element('xpath','//html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/section[1]',function bool(result){
        if(result.status !=-1)
        {
          var rand = video[Math.floor(Math.random() * video.length)];
          client
          .pause(2000)
      .setValue('//*[@id="fileUpload"]', require('path').resolve(rand))
      .click('//*[@id="content-wrapper"]/div[2]/div/div[2]/div/div/div/section/section/section[2]/section/button')
      .pause(50000)
      .click('//span[@class="closeBtn sc-jTzLTM kUcnxM"]')
        }
      });
      client
      .click('//span[@class="log-out"]')
    }
  }
    client.end()
});
  }
}
