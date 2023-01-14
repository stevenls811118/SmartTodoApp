const axios = require('axios');

const omdbFetch = async(input) => {
  try {

    let OMDBstring = input.replace(/ /g, '+').replace(/&/g, '%26');
 
    const resOMDB = await axios.get(`https://www.omdbapi.com/?t=${OMDBstring}&apikey=7bcf905d`);
      
    console.log('OMDB data.Type: ', resOMDB.data.Type);

    let type = resOMDB.data.type;
    console.log(type);

    if (type === undefined) {
      console.log("No movie can be found");
      return false;
    }

    return resOMDB.data;
  } catch (error) {
    console.log(error.response.body);
  }
};

// omdbFetch('avatar');
module.exports = omdbFetch;
