const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("a5da1b8a8cf1954f193059de03c1785017afb51eb30464e96a8c4a35547587e5");
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

// serpApiFetch("Rice Table Korean Kitchen")
//   .then(data => {
//     console.log(data);
//   });

module.exports = serpApiFetch;