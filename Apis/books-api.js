const axios = require('axios');

const gBooksDetails = async(input) => {
  try{
    // sets API URL request and string variable
    // console.log("beginning book search"); //Test Code
    const gBooksString = input.replace(/ /g, '+').replace(/&/g, '%26');
    // console.log(gBooksString); //Test Code
    const apiUrlRequest = `https://www.googleapis.com/books/v1/volumes?q=${gBooksString}`;
    // console.log(apiUrlRequest); //Test Code
    
    // async promise for Google books API 
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${gBooksString}`);
    // console.log(response.data);
    // console.log(`book has been found!`); //Test Code

    return response.data.kind;

    // catch error message
  } catch (error) {
    console.log(error.response.body); //Test Code
    // console.log(`book has not been found!`); //Test Code
  }
};

module.exports = gBooksDetails;