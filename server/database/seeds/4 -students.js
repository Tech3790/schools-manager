const students = require("../seed-data/students_data.js");
exports.seed = function(knex) {
  return knex("students")
    .del()
    .then(() => {
      return knex("students").insert(students);
    });
};
