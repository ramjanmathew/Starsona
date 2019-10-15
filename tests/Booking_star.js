var XLSX = require('xlsx');
var workbook = XLSX.readFile('/home/rahul/Documents/Starsona-Automation/Nightwatch/tests/Booking stars_by fan.xlsx');
var sheet_name_list = workbook.SheetNames;
var range = { s: { c: 0, r: 0 }, e: { c: 10, r: 10 } };
var url = [];
var email = [];
/* Iterate through each element in the structure */

module.exports = {
    'Booking Star by fan' : function (client) {
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
  }
      client
      .url('https://starsona-dev.qburst.build/')
        .click('xpath','//button[contains(text(),"Log In")]')
       .useXpath()
       .setValue('//input[@name="email"]', email[0])
      .setValue('//input[@name="password"]', '1234567@')
      .click('//button[contains(@class,"sc-kpOJdX hZbcbm")]')
      .pause(2000)
      for(var i=0;i<url.length;i++)
      {
    client
        
      .url(url[i])
      .click('//button[@class="common-btn action-button sc-kpOJdX lfXDAS"]')
      .click('//p[contains(text(),"Celebrate everyday moments with a personalized vid")]')
      .click('//section[@class="dropdown-wrapper sc-dnqmqq dbIXmq"]')
      .click('//li[contains(text(),"Bat Mitzvah")]')
      .assert.visible('/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[1]/div[1]/div[1]/input[1]')
      .setValue('/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[1]/div[1]/div[1]/input[1]', 'Gordon')
      .setValue('/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[2]/div[1]/div[1]/input[1]', 'Rahul')
      .setValue('/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[3]/div[1]/div[1]/div[1]/input[1]', 'Father')
      .click('/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]')
      .click('/html[1]/body[1]/div[3]/div[2]/div[1]/section[1]/section[2]/section[1]/div[1]/section[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[5]/div[5]')
      .assert.visible('//button[@class="common-btn continue-button sc-kpOJdX lfXDAS"]')
      .pause(1000)
      .click('//button[@class="common-btn continue-button sc-kpOJdX lfXDAS"]')
      .pause(2000)
      .waitForElementVisible('//button[@id="booking-script"]')
      .click('//button[@id="booking-script"]')
      .waitForElementVisible('//span[contains(@class,"cardNo")]')
      .click('//span[contains(@class,"cardNo")]')
      .click('//button[@id="booking-payment"]')
      .pause(3000)
     
      }
      client.end()
});
    }
}