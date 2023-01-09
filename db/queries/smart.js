// const omdbTypeFetch = require("../../scripts/api");
const db = require("../connection");

const insertItem = (input) => {
  const queryString = `
  INSERT INTO items (list_id, item_name)
  VALUES ($1, $2)
  RETURNING *
  `;

  let queryParams = [];

  if (input.type === 'movie') {
    queryParams = [1, input.name];
  } else {
    queryParams = [5, input.name];
  }

  return db
    .query(queryString, queryParams)
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
  SELECT *
  FROM items
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

const deleteItem = (name) => {
  const queryString = `
  DELETE FROM items
  WHERE item_name = $1
  `;

  return db
    .query(queryString, [name])
    .then((result) => {
      return result.rows;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

module.exports = { insertItem, getItems, deleteItem };
