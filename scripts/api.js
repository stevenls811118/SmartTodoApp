const axios = require('axios');

const omdbTypeFetch = async(input) => {
  try {
    let string = input.replace(/ /g, '+');
    const response = await axios.get(`https://www.omdbapi.com/?t=${string}&apikey=7bcf905d`);
    console.log(response.data);
    console.log(response.data.Type);
    return response.data.Type;
  } catch (error) {
    console.log(error.response.body);
  }
};

module.exports = omdbTypeFetch;