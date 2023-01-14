const axios = require('axios');

const gBooksDetails = async(input) => {
  try {
    // sets API URL request and string variable
    // console.log("beginning book search"); //Test Code
    let openLibString = input.split(' ').join('+');
    // console.log(gBooksString); //Test Code
    
    // async promise for Google books API
    const response = await axios.get(`http://openlibrary.org/search.json?q=${openLibString}`);

    // console.log('Google books data.totalItems: ', response.data.totalItems);

    const bookFound = response.data.numFound;

    console.log(bookFound);

    return bookFound;

    // catch error message
  } catch (error) {
    console.log(error); //Test Code
    // console.log(`book has not been found!`); //Test Code
  }
};
// gBooksDetails('Harry Potter');
module.exports = gBooksDetails;