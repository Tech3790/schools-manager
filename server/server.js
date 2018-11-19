import knex from "./database";
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  knex.insert();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
