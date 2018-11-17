import knex from "./database";
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  knex.insert();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
