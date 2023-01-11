const express = require("express");
const router = express.Router();
const { insertItem, getItems, deleteItem } = require("../db/queries/smart.js");
// const apiFetch = require("../scripts/api");
const gBooksDetails = require("../scripts/books-api.js");

router.post("/", (req, res) => {
  console.log("req.body: ", req.body);
  gBooksDetails(req.body.todo_input)
    .then((result) => {
      console.log('result is: ', result);
      let input = { name: req.body.todo_input, type: result };
      console.log("input is: ", input);
      return input;
    })
    .then((input) => {
      insertItem(input).then((result) => {
        console.log(result);
        res.status(200).send("Ok!");
      });
    });
});

router.get("/", (req, res) => {
  getItems().then((items) => {
    // console.log(items);
    res.json(items);
  });
});

router.delete("/", (req, res) => {
  console.log("req.body: ", req.body.deleteBook.trim());
  deleteItem(req.body.deleteBook.trim()).then((items) => {
    console.log(items);
    res.json(items);
  });
});

module.exports = router;