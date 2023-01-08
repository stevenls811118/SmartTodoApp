const express = require("express");
const router = express.Router();
const { insertItem, getItems } = require("../db/queries/books");

router.post("/", (req, res) => {
  console.log("req out req.body", req.body);
  insertItem(req.body.todo_input).then((result) => {
    console.log(result);
    res.status(200).send("Ok!");
  });
});

router.get("/", (req, res) => {
  getItems().then((items) => {
    res.json(items);
  });
});

module.exports = router;
