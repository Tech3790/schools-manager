const knex = require("./database");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
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
app.post("/teachers", (req, res) => {
  knex("teachers")
    .insert({
      teacher_name: req.body.teacher_name,
      teacher_address: req.body.teacher_address
    })
    .then(res.sendStatus(201));
});
app.post("/students", (req, res) => {
  knex("students")
    .insert({
      student_name: req.body.student_name,
      student_address: req.body.student_address
    })
    .then(res.sendStatus(201));
});
app.post("/classes", (req, res) => {
  knex("classes")
    .insert({
      class_name: req.body.class_name,
      class_size: req.body.class_size,
      teacher_id: req.body.teacher_id
    })
    .then(res.sendStatus(201));
});
app.delete("/teachers", (req, res) => {
  knex("teachers")
    .where({ id: req.body.id })
    .del()
    .then(res.sendStatus(202));
});
app.delete("/classes", (req, res) => {
  knex("classes")
    .where({ id: req.body.id })
    .del()
    .then(res.sendStatus(202));
});
app.delete("/students", (req, res) => {
  knex("students")
    .where({ id: req.body.id })
    .del()
    .then(res.sendStatus(202));
});
app.post("/getTeacherIdByName", (req, res) => {
  knex("teachers")
    .where({ teacher_name: req.body.teacher_name })
    .then(data => {
      res.send(data);
    });
});
app.post("/getStudentIdByName", (req, res) => {
  knex("students")
    .where({ student_name: req.body.student_name })
    .then(data => {
      res.send(data);
    });
});
app.post("/getClassIdByName", (req, res) => {
  knex("classes")
    .where({ class_name: req.body.class_name })
    .then(data => {
      res.send(data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
