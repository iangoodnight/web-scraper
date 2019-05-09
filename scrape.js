const rp = require('request-promise');
const url = 'https://status.bigcommerce.com/';
const ch = require('cheerio');

rp(url)
  .then(function(html){
    //success!
    // console.log(ch('.name', html).length);
    // console.log(ch('.name', html).text());
    console.log(ch('.component-inner-container', html).text());
  })
  .catch(function(err){
    //handle error
  });