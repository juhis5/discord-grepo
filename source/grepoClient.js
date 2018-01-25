var request = require('request');
var util = require('./grepoConnection/util');
var logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

var csvFilePath='out';


var files = {players: "target/players.csv"};

util.updateFiles(function(){
   logger.info('Hip hip hurraa')
});

// Fetch http://example.com/foo.gz, gunzip it and store the results in 'out'


module.exports = {
   //updateFiles = updateFiles;

   //fileNames = files;
}
