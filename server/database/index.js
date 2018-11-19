const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    database: "schools"
  }
});
module.exports = knex;
