const axios = require('axios');

// set up the request parameters
const params = {
api_key: "B7449ED21AF0487C8BF644C4163A80BF",
  amazon_domain: "amazon.ca",
  asin: "B073JYC4XM",
  type: "product"
}

// make the http GET request to Rainforest API
axios.get('https://api.rainforestapi.com/request', { params })
.then(response => {

    // print the JSON response from Rainforest API
    console.log(JSON.stringify(response.data, 0, 2));

  }).catch(error => {
// catch and print the error
console.log(error);
})
