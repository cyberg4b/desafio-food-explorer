exports.up = knex => knex.schema.createTable('ingredients', function(table) {
    table.increments('id');

    table.text('name').notNullable();
    table.integer('dish_id').references('id').inTable('dishes').onDelete("CASCADE");
    table.timestamp('created_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('ingredients');