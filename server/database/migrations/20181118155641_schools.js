exports.up = knex => {
  return knex.schema.createTable("schools", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("school_name").notNull();
    table.string("school_address").notNull();
    table.dateTime("createdAt").nullable();
    table.dateTime("updatedAt").nullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("schools");
};
