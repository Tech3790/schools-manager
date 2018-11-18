exports.up = (knex) => {
    return knex.schema.createTable('teachers', (table) => {
        table.increments('id').unsigned().primary();
        table.string("teacher_name").notNull();
        table.string("teacher_address").notNull();
        table.integer("school_id").references('id').inTable('schools').notNull();
        table.dateTime('createdAt').notNull();
        table.dateTime('updatedAt').nullable();
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('teachers');
};