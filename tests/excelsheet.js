var xlsx = require('xlsx');
var fs = require('fs');
if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('MyExcelDoc.xlsx');
var sheetnamelist = workbook.SheetNames;

module.exports = {
'MyTest' : function (browser) {
        //iterates through excel sheet testing each URL
        sheetnamelist.forEach(function(y) {
            var worksheet = workbook.Sheets[y];
            var z;
            for (z in worksheet) {
                if(z[0] === '!') continue;
                var url = worksheet[z].v;
                browser
                    .url(url);
                    //do something at your url//
            }
        });
    browser.end()
    }       
};