const axios = require('axios');

const gBooksDetails = async(input) => {
  try{
    // sets API URL request and string variable
    console.log("beginning book search");
    const gBooksString = input.replace(/ /g, '+').replace(/&/g, '%26');
    console.log(gBooksString);
    const apiUrlRequest = `https://www.googleapis.com/books/v1/volumes?q=${gBooksString}`;
    console.log(apiUrlRequest);
    
    // async promise for Google books API 
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${gBooksString}`);
    // console.log(response.data);
    console.log(`book has been found!`);

    return response.data.kind;

    // .then(res => {
    //   const bookInfo = res.data.items
    // })

    // catch error message
  } catch (error) {
    console.log(error.response.body);
    console.log(`book has not been found!`);
  }
};

// const gBooksDetails = async(input) => {
//   console.log("beginning book search");
//   const gBooksString = input.replace(/ /g, '+').replace(/&/g, '%26');
//   const apiUrlRequest = `https://www.googleapis.com/books/v1/volumes?q=${gBooksString}`;
//   return axios.get(apiUrlRequest).then(res => {
//     const bookInfo = res.data.items[0].volumeInfo;
//     console.log("this is a book");
//     return {
//       title: bookInfo.title,
//       subtitle: bookInfo.subtitle,
//       authors: bookInfo.authors,
//       year: bookInfo.publishedDate,
//       categories: bookInfo.categories,
//       thumbnail: bookInfo.imageLinks.thumbnail,
//       link: bookInfo.previewLink
//     }
//   })
// };

module.exports = gBooksDetails;