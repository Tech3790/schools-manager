module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "schools-manager"
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
