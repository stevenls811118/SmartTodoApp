const express = require("express");
const router = express.Router();
const {
  insertItem,
  getItems,
  deleteItem,
  editItem,
} = require("../db/queries/smart.js");
const omdbFetch = require("../apis/movieApi");
const yelpFetch = require("../apis/restaurantApi.js");
const openLibDetails = require("../apis/books-api.js");
const SerpApiFetch = require("../apis/products_api.js");

router.post("/", (req, res) => {
  console.log("req.body: ", req.body);
  let keyword = req.body.name;
  if (req.body.finalResult === undefined) {
    Promise.all([omdbFetch(keyword), yelpFetch(keyword), openLibDetails(keyword), SerpApiFetch(keyword)])
      .then((result) => {
        // console.log("OMDB result is: ", result[0].Title, result[0].Type);
        let category = [];
        let yelpType = undefined;
        let googleBookType = undefined;
        let serpApiType = undefined;
        let input = { name: undefined, type: undefined };

        if (result[0].Type !== undefined) {
          category.push(result[0].Type);
        }
        
        if (result[1].total !== 0) {
          yelpType = "restaurant";
          category.push(yelpType);
        }

        if (result[2] !== 0) {
          googleBookType = "book";
          category.push(googleBookType);
        }
        
        if (result[3] === undefined) {
          serpApiType = "product";
          category.push(serpApiType);
        }

        input = { category, name: req.body.name, type: category[0] };

        console.log("input is: ", input);
        return input;
      })
      .then((input) => {
        console.log("========", input);
        if (input.category.length > 1) {
          return res.status(400).send({
            status: 3,
            category: input.category,
            name: input.name,
            message: "Please select a category",
          });
        }

        insertItem(input).then((result) => {
          console.log(result);
          res.status(200).send("Ok!");
        });
      });
  } else if (req.body.finalResult) {
    let finalObj = { name: req.body.name, type: req.body.type };
    console.log("final step: ", finalObj);
    insertItem(finalObj).then((result) => {
      console.log(result);
      res.status(200).send("Ok!");
    });
  }
});

router.get("/", (req, res) => {
  getItems().then((items) => {
    // console.log(items);
    res.json(items);
  });
});

router.put("/", (req, res) => {
  console.log("req.body: ", req.body.edit);
  editItem(req.body.edit, req.body.id).then((items) => {
    console.log(items);
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
