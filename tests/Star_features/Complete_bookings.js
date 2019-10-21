var XLSX = require('xlsx');
var workbook = XLSX.readFile('/home/rahul/Documents/Starsona-Automation/Nightwatch/tests/Assets/Booking stars_by fan.xlsx');
var sheet_name_list = workbook.SheetNames;
var range = { s: { c: 0, r: 0 }, e: { c: 10, r: 10 } };
var email = [];
var video = ['/home/rahul/Downloads/Video/Johnny_Bravo_-_Beach_Blanket_Bravo.mp4','/home/rahul/Downloads/Video/Kanye_West__Lil_Pump_ft_Adele_Givens_-_I_Love_It_Official_Music_Video.mp4',
'/home/rahul/Downloads/Video/Lady_Gaga_Bradley_Cooper_-_Shallow_A_Star_Is_Born.mp4','/home/rahul/Downloads/Video/Love_Action_Drama__Official_Teaser__Nivin_Pauly_Nayanthara__Dhyan_Sreenivasan__Shaan_Rahman_HD.mp4'];
module.exports = {
  'Complete Booking by star 1' : function (client) {
    const page = client.page.completeBookingsObject();
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
            if(data.startsWith('D'))
          { email.push(worksheet[data].v);
          }
        }
      }
    }
    for(var i=0;i<email.length;i++)
    {
      page
        .completeBookings(email[j])
        .pause(3000)
for(var j=0;j<email.length;j++)
    {
      page
        .api.element('xpath','/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/span[2]',function(result){
          if(result.status !=-1){
             // element is disabled , do what you want
             console.log('Booking is Present');  
             page
            .checkBooking(video[[Math.floor(Math.random() * video.length)]])
          }
          else{
            console.log('Booking not present');
            page
            .logout()
        }
       })
        page
        .assert.containsText('body','Personalized Videos From the Stars')
      }
    }
  page
  .end()
  });
}
}
