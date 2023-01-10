const axios = require('axios');

const apiFetch = async(input) => {
  try {

    let OMDBstring = input.replace(/ /g, '+').replace(/&/g, '%26');
    let Yelpstring = input.replace(/ /g, '%20').replace(/&/g, '%26');

    const options = {
      method: 'GET',
      url: `https://api.yelp.com/v3/businesses/search?location=T3P%200P2&term=${Yelpstring}&radius=4000&attributes=&sort_by=rating&limit=3`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer IlU3F0N7JBOAIGEr3_C43kvXDwTFnug8-dti8miCOuNnssGTacfiDfxB2KtUMAfCudghUy-EqGtn2yINVNbo6ZkGT-NHLIU8Xq1lEMRQ1Xo675l4KG50f2CwfeW8Y3Yx'
      }
    };

    const [resOMDB, resYelp] = await axios.all([
      axios.get(`https://www.omdbapi.com/?t=${OMDBstring}&apikey=7bcf905d`),
      axios.request(options)
    ]);
    // console.log('OMDB data: ', resOMDB.data);
    // console.log(resOMDB.data.Type);
    // console.log('Yelp data: ', resYelp.data);
    return [resOMDB.data, resYelp.data];
  } catch (error) {
    console.log(error.response.body);
  }
};

// apiFetch('avatar');
module.exports = apiFetch;
