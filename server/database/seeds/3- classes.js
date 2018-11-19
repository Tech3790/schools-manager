const classes = require("../seed-data/classes_data.js");
exports.seed = function(knex) {
  return knex("classes")
    .del()
    .then(() => {
      return knex("classes").insert(classes);
    });
};
