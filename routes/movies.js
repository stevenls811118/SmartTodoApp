const express = require("express");
const router = express.Router();
const { insertItem, getItems, deleteItem } = require("../db/queries/smart.js");
const omdbFetch = require("../apis/movieApi");
const yelpFetch = require("../apis/restaurantApi.js");

router.post("/", (req, res) => {
  console.log("req.body: ", req.body);
  let keyword = req.body.todo_input;

  Promise.all([omdbFetch(keyword), yelpFetch(keyword)])
    .then((result) => {

      // console.log("OMDB result is: ", result[0].Title, result[0].Type);
      
      let yelpType = undefined;
      let input = { name: undefined, type: undefined };

      if (result[1].total !== 0) {
        yelpType = 'restaurant';
        // console.log("Yelp result is: ", result[1].businesses[0].name);
      }

      if (result[0].Type === undefined && yelpType === undefined) {
        input = { name: req.body.todo_input, type: undefined };
      } else if (result[0].Type === undefined && yelpType === 'restaurant') {
        input = { name: result[1].businesses[0].name, type: yelpType };
      } else if (result[0].Type !== undefined && yelpType === undefined) {
        input = { name: result[0].Title, type: result[0].Type };
      } else if (result[0].Type !== undefined && yelpType !== undefined) { // when apiFetch return multiple, force to movie list for now, will add user choose option feature later.
        input = { name: result[0].Title, type: result[0].Type };
      }
      
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
  console.log("req.body: ", req.body.delete.trim());
  deleteItem(req.body.delete.trim()).then((items) => {
    console.log(items);
    res.json(items);
  });
});

module.exports = router;
