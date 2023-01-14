const axios = require('axios');

const gBooksDetails = async(input) => {
  try {
    // sets API URL request and string variable
    let openLibString = input.replace(/ /g, '%20').replace(/&/g, '%26');
    // console.log(gBooksString); //Test Code
    
    // async promise for Google books API
    const response = await axios.get(`http://openlibrary.org/search.json?q=${openLibString}`);
    // console.log(`http://openlibrary.org/search.json?q=${openLibString}`);

    // console.log('Google books data.totalItems: ', response.data.totalItems);

    let bookSet = new Set([response.data.docs.map((item) => {
      return item.title;
    })])

    let bookArr = Array.from(bookSet);
    console.log(bookArr);

    let bookTitles = bookArr[0];
    console.log(bookTitles);

    if (bookTitles[0] === undefined) {
      console.log("No book can be found");
      return false;
    }

    // console.log(bookTitles[0])

    for (const title of bookTitles) {
      if (input.toLowerCase() === title.toLowerCase()) {
        console.log("this is a book")
        return true;
      }
      console.log("this is not a book")
      return false;
    }

    // catch error message
  } catch (error) {
    console.log(error); //Test Code
    // console.log(`book has not been found!`); //Test Code
  }
};
// gBooksDetails('Harry Potter');
module.exports = gBooksDetails;