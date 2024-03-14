const request = require('request');
const arg = process.argv.slice(2);

request("https://api.thecatapi.com/v1/breeds/search?q=" + arg, (error, response, body) => {
  if (error !== null) {
    console.log("Request error!: ", error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Invalid search, please try again.");
    process.exit();
  }
  console.log(data[0].description);

});