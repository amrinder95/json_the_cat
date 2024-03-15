const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, body) => {
    let data = JSON.parse(body.body);
    if (error !== null) {
      callback(error, null);
      process.exit();
    }
    if (data[0] === undefined) {
      callback(error, null);
      process.exit();
    }
    callback(null, data[0].description);
  });
};

module.exports = {fetchBreedDescription};