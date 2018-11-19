const knex = require("./database");
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

app.get("/classes", (req, res) => {
  knex("classes").then(classes => {
    res.send(classes);
  });
});
app.get("/teachers", (req, res) => {
  knex("teachers").then(teachers => {
    res.send(teachers);
  });
});
app.get("/students", (req, res) => {
  knex("students").then(students => {
    res.send(students);
  });
});

// app.get("/teachers", (req, res) => {
//   knex.insert();
// });
// app.get("/students", (req, res) => {
//   knex.insert();
// });
// app.post("/classes", (req, res) => {
//   knex.insert();
// });
// app.post("/teachers", (req, res) => {
//   knex.insert();
// });
// app.post("/students", (req, res) => {
//   knex.insert();
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
