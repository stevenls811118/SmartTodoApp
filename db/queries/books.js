const db = require("../connection");

const insertItem = (input) => {
  const queryString = `
  INSERT INTO items (list_id, item_name)
  VALUES (1, $1)
  RETURNING *
  `;

  return db
    .query(queryString, [input])
    .then((result) => {
      return result.rows[0];
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

const getItems = () => {
  const queryString = `
  SELECT * FROM items

  `;

  return db
    .query(queryString)
    .then((result) => {
      return result.rows;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

module.exports = { insertItem, getItems };
