const teachers = require("../seed-data/teachers_data.js");
exports.seed = function(knex) {
  return knex("teachers")
    .del()
    .then(() => {
      return knex("teachers").insert(teachers);
    });
};
