const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("660915ab6df368e73435200704f0519fd314c30c9b91db82f1838e2e0e19b5e3");

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