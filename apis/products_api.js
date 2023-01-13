const axios = require('axios');
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("95b37135ebe388a0274960f4e2d2055aa8ef471b0c9ecd3d468f11386212b91e");

// set up the request parameters



const productDetails = async(input) => {
  try {

    const params = {
      engine: "walmart",
      query: `${productString}`,
    };

  //set up console.logs for debugging
  console.log("looking for products");
  const productString = input.replace(/ /g, '+').replace(/&/g, '%26');
  console.log(productString);
  const urlRequest = (`https://serpapi.com/search.json?engine=walmart&query=${productString}`);
  console.log(urlRequest);

  const resSerpApi = await axios.get(`https://serpapi.com/search.json?engine=walmart&query=${productString}`)
  console.log(response.data);
  console.log(`found the product`)
  return resSerpApi.data;
}
 catch (error) {
// catch and print the error
console.log(error);
  };

}

// Show result as JSON
// search.json(params, productDetails);
module.exports = productDetails;
