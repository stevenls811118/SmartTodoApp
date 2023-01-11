const axios = require('axios');

const gBooksDetails = async(input) => {
  try {
    // sets API URL request and string variable
    // console.log("beginning book search"); //Test Code
    
    // console.log(gBooksString); //Test Code
    
    // async promise for Google books API
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`);

    console.log('Google books data.totalItems: ', response.data.totalItems);
  
    return response.data.totalItems;

    // catch error message
  } catch (error) {
    console.log(error.response.body); //Test Code
    // console.log(`book has not been found!`); //Test Code
  }
};
// gBooksDetails('Harry Potter');
module.exports = gBooksDetails;