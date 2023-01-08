const express = require("express");
const router = express.Router();
const { insertItem, queryList } = require("../db/queries/books");
// const createListElements = require("../public/scripts/insertItemToList");

router.post("/", (req, res) => {
  console.log("req out req.body", req.body);
  insertItem(req.body.todo_input)
    .then((result) => {
      console.log(result);
      res.status(200).send("Ok!");
    });
});

// router.get("/", (req, res) => {
//   console.log('get page');
//   queryList()
//     .then((result) => {
//       createListElements(result);
//     })
//     .catch(e => console.log(e));
// });

module.exports = router;
