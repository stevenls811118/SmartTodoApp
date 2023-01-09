const express = require("express");
const router = express.Router();
const { insertItem, getItems, deleteItem } = require("../db/queries/books");

router.post("/", (req, res) => {
  console.log("req.body: ", req.body);
  insertItem(req.body.todo_input).then((result) => {
    console.log(result);
    res.status(200).send("Ok!");
  });
});

router.get("/", (req, res) => {
  getItems().then((items) => {
    console.log(items);
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
