const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("95b37135ebe388a0274960f4e2d2055aa8ef471b0c9ecd3d468f11386212b91e");
const serpApiFetch = async(input, req, res) => {

  return new Promise((resolve) => {

    const params = {
      engine: "google",
      q: `"${input}"`,
      location: "Calgary",
      google_domain: "google.ca",
      gl: "ca",
      hl: "en",
      tbm: "shop",
      num: "1"
    };

    const callback = function(data) {
      resolve(data.error);
    };

    search.json(params, callback);
  });
};
// Show result as JSON

// serpApiFetch("RTX 4070 Ti")
//   .then(data => {
//     console.log(data);
//   });

module.exports = serpApiFetch;