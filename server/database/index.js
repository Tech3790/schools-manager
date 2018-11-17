const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    database: "schools-manager"
  }
});
module.exports = knex;
