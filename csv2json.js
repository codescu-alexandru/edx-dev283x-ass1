const csv = require('csvtojson');
const EventEmmiter = require('events');
const fs = require('fs');
const path = require('path');

class JsonWritter extends EventEmmiter {
  constructor(outputPath) {
    super();
    this.fileStream = fs.createWriteStream(outputPath, {'flags': 'w', 'autoclose': true});
  }
}

// Input and output file names
const inputFile = 'customer-data.csv';
const outputFile = 'customer-data.json';

// Path for filename is __dirname/data/filename
const getPath = (fileName) => {
  return path.join(__dirname, 'data', fileName);
};

// create json writter instance
let jsonWritter = new JsonWritter(getPath(outputFile));

// create on data event listener
jsonWritter.on('data', function(data) {
  this.fileStream.write(data);
  console.log('Done processing file');
});

// json array buffer collector and index
let jsonResult = [];
let index = 0;

csv()
  .fromFile(getPath(inputFile))
  .on('json', (jsonObj) => {
    // for each row, store the object in the array and increment index
    jsonResult[index] = jsonObj;
    index++;
  })
  .on('done', (error) => {
    // when processing is finished
    // check to see if it was successful
    if (error) {
      console.log('Error processing file' + error);
    } else {
      // send event to listener with the resulting array object
      jsonWritter.emit('data', JSON.stringify(jsonResult));
    }
  });
