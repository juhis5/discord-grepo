var request = require('request');
var zlib = require('zlib');
var fs = require('fs');
var out = fs.createWriteStream('target/players.csv');
var csv = require('csvtojson');
var logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
   colorize: true
});
logger.level = 'debug';

function saveAsJson(csvString, fileName, callback) {

   var list = [];
   // TODO: get headers from properties?
   var options = {
      noheader: true,
      headers: ['id', 'name', 'allianceId', 'points', 'rank', 'towns']
   }

   csv(options).fromString(csvString).on('json', (csvRow) => {
      list.push(csvRow);
   }).on('done', () => {
      fs.writeFile("target/"+fileName, JSON.stringify(list), function(err) {
         if (err) {
            return logger.error(err);
         }
      });
   });
}

module.exports = {
   updateFiles: function(callback, ) {
      request("http://en104.grepolis.com/data/conquers.txt.gz", {
         encoding: null
      }, function(err, response, body) {
         zlib.gunzip(body, function(err, dezipped) {
            saveAsJson(dezipped.toString(), 'conquers.json', callback);
         });
      });
   }
}
