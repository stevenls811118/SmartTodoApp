const express = require("express");
const router = express.Router();
const { insertItem, getItems, deleteItem } = require("../db/queries/smart.js");
const omdbFetch = require("../apis/movieApi");
const yelpFetch = require("../apis/restaurantApi.js");
const gBooksDetails = require("../apis/books-api.js");

router.post("/", (req, res) => {
  console.log("req.body: ", req.body);
  let keyword = req.body.todoInput;

  Promise.all([omdbFetch(keyword), yelpFetch(keyword), gBooksDetails(keyword)])
    .then((result) => {
      // console.log("OMDB result is: ", result[0].Title, result[0].Type);
      let category = [];
      let yelpType = undefined;
      let googleBookType = undefined;
      let input = { name: undefined, type: undefined };

      if (result[0].Type !== undefined) {
        category.push(result[0].Type);
      }
      if (result[1].total !== 0) {
        yelpType = "restaurant";
        category.push(yelpType);
      }
      console.log(result[2]);
      if (result[2] !== 0) {
        googleBookType = "book";
        category.push(googleBookType);
      }

      console.log("--------", category);

      input = { category, name: req.body.todoInput, type: category[0] };

      // if (category.length === 0) {
      //   input = { category, name: req.body.todoInput, type: undefined };
      // } else
      // if (category.length === 1) {
      // input.type = category[0]
      // input = { category, name: req.body.todoInput, type: category[0] };
      // } else
      // if (category.length >= 1) {
      //   // For more than 1 category return from APIs we will send back to user to pick later, for now it will goes with the first available category
      //   console.log(category);
      //   input = { category, name: req.body.todoInput, type: category[0] };
      // }

      console.log("input is: ", input);
      return input;
    })
    .then((input) => {
      console.log("========", input);
      if (input.category.length > 1) {
        return res.status(400).send({
          status: 3,
          category: input.category,
          message: "Please select a category",
        });
      }

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
  console.log("req.body: ", req.body.delete.trim());
  deleteItem(req.body.delete.trim()).then((items) => {
    console.log(items);
    res.json(items);
  });
});

module.exports = router;
