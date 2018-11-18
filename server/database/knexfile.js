module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "schools"
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
