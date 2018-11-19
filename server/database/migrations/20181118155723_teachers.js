exports.up = knex => {
  return knex.schema.createTable("teachers", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("teacher_name").notNull();
    table.string("teacher_address").notNull();
    table.timestamps(true, true);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("teachers");
};
