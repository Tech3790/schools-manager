exports.up = (knex) => {
    return knex.schema.createTable('classes', (table) => {
        table.increments('id').unsigned().primary();
        table.string("class_name").notNull();
        table.string("class_size").notNull();
        table.integer("school_id").notNull().references('id').inTable('schools').notNull();;
        table.integer("teacher_id").notNull().references('id').inTable('teachers').notNull();;
        table.dateTime('createdAt').notNull();
        table.dateTime('updatedAt').nullable();
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('classes');
};
