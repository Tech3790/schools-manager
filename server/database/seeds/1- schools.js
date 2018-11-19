const schools = require('../seed-data/schools_data.js');
exports.seed = function(knex) {
  return knex("schools")
    .del()
    .then(() => {
      return knex("schools").insert(schools);
    });
};
