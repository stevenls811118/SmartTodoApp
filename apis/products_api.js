const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("1daefd974a8dfe0cc29b843652c0ce70b7e8695e8bc7849ea5c6fe318c0fc369");
const serpApiFetch = async(input, req, res) => {

  let inputArray = input.split(' ');
  console.log(inputArray);
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
      let found = 0;
      if (data.error) {
        resolve(data.error);
      } else {
        // console.log("data.shopping_results[0] is: ", data.shopping_results[0]);
        for (let i of inputArray) {
          if (data.shopping_results[0].title.toLowerCase().includes(i.toLowerCase())) {
            found++;
          }
        }
        if (found >= 2 / 3 * inputArray.length) {
          console.log("found is : ", found);
          console.log("2 / 3 inputArray.length is: ", 2 / 3 * inputArray.length);
          resolve(undefined);
        } else {
          resolve("Product not found");
        }
      }
      
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