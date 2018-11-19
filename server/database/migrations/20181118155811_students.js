exports.up = knex => {
  return knex.schema.createTable("students", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("student_name").notNull();
    table.string("student_address").notNull();
    table
      .integer("school_id")
      .references("id")
      .inTable("schools");
    table.timestamps(true, true);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("students");
};
