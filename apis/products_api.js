const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("aa46ee7002b8019769d5949f92893822602a74f94d2062645d74e56de0998117");
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