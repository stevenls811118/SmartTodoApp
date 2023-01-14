const axios = require('axios');

const openLibDetails = async(input) => {

  try {
    console.log(input);
    // sets API URL request and string variable
    let openLibString = input.replace(/ /g, '%20').replace(/&/g, '%26');
    // console.log(gBooksString); //Test Code

    // async promise for Google books API
    const response = await axios.get(`http://openlibrary.org/search.json?q=%20${openLibString}%22`);

    // console.log('Google books data.totalItems: ', response.data.totalItems);

    let bookSet = new Set([response.data.docs.map((item) => {
      return item.title;
    })]);

    let bookArr = Array.from(bookSet);

    let bookTitles = bookArr[0];
    console.log(bookTitles);
    for (let title of bookTitles) {
      if (input.toLowerCase().includes(title.toLowerCase())) {
        
        return 1;
      }
    }

    return 0;
    // catch error message
  } catch (error) {
    console.log(error); //Test Code
    // console.log(book has not been found!); //Test Code
  }
};
// gBooksDetails('Harry Potter');
module.exports = openLibDetails;