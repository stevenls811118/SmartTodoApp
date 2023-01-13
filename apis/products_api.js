const axios = require('axios');
const { json } = require('express');
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(process.env.SERP_API_KEY);

const productDetails = async (input, req, res) => {

  return new Promise((resolve) => {

    const params = {
      engine: "walmart",
      query: `"${input}"`,
    };

    const callback = function (data) {
      resolve(data.error);
      // console.log('Product data.total: ', Object.keys(data["organic_results"]).length);
      // console.log(data);
    };

    console.log("this is an Item");
    search.json(params, callback);
  })
};

module.exports = productDetails;