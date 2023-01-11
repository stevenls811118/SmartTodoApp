const axios = require('axios');

const yelpFetch = async(input) => {
  try {

    let Yelpstring = input.replace(/ /g, '%20').replace(/&/g, '%26');

    const options = {
      method: 'GET',
      url: `https://api.yelp.com/v3/businesses/search?location=T3P%200P2&term=${Yelpstring}&radius=4000&attributes=&sort_by=rating&limit=3`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer IlU3F0N7JBOAIGEr3_C43kvXDwTFnug8-dti8miCOuNnssGTacfiDfxB2KtUMAfCudghUy-EqGtn2yINVNbo6ZkGT-NHLIU8Xq1lEMRQ1Xo675l4KG50f2CwfeW8Y3Yx'
      }
    };

    const resYelp = await axios.request(options);
    console.log('Yelp data.total: ', resYelp.data.total);
    return resYelp.data;
  } catch (error) {
    console.log(error.response.body);
  }
};

// yelpFetch('a&w');
module.exports = yelpFetch;