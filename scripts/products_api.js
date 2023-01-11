// const axios = require('axios');
// const SerpApi = require('google-search-results-nodejs');
// const search = new SerpApi.GoogleSearch("secret_api_key");

// // set up the request parameters
// const params = {
//   engine: "google_product",
//   product_id: "4172129135583325756",
//   offers: "1",
//   gl: "us",
//   hl: "en"
// };

// const productDetails = async(input) => {
//   //set up console.logs for debugging
//   console.log("looking for products");
//   const productString = input.replace(/ /g, '+').replace(/&/g, '%26');
//   console.log(productString);
//   const urlRequest = ('https://serpapi.com/search.json?engine=google_product&product_id=4172129135583325756&offers=1&gl=us&hl=en');
//   console.log(urlRequest);

//   axios.get('https://serpapi.com/search.json?engine=google_product&product_id=4172129135583325756&offers=1&gl=us&hl=en', { params })
// .then(response => {

//     // print the JSON response from Rainforest API
//     console.log(JSON.stringify(response.data, 0, 2));

//   }).catch(error => {
// // catch and print the error
// console.log(error);
//   })
// };

// // Show result as JSON
// search.json(params, productDetails);

// module.exports = productDetails;
