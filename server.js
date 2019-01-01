const fs = require('fs');
const csv=require('csvtojson');

//  Input file
const csvFilePath = 'input.csv';

//  Create input stream
const readStream = require('fs').createReadStream(csvFilePath);

//  Create output stream
const file = fs.createWriteStream('output.json');

//  Pipe the streams together
readStream.pipe(csv()).pipe(file);