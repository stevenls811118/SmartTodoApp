// const axios = require('axios');

// // set up the request parameters
// const rainforestFetch = async(input) => {

//   // let rainforeststring = input.replace(/ /g, '+').replace(/&/g, '%26');
//   const params = {
//     api_key: "8CE5722E80974FCD9E87AC223DB445DD",
//     type: "search",
//     amazon_domain: "amazon.com",
//     search_term: `${input}`,
//     sort_by: "price_high_to_low"
//   };

//   // make the http GET request to Rainforest API
//   axios.get('https://api.rainforestapi.com/request', { params })
//     .then(response => {

//       // print the JSON response from Rainforest API
//       console.log(JSON.stringify(response.data, 0, 2));

//     }).catch(error => {
//       // catch and print the error
//       console.log(error);
//     });
// };

// rainforestFetch('rtx 4070');
// module.exports = rainforestFetch;