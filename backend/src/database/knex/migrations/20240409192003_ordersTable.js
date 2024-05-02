exports.up = knex => knex.schema.createTable('orders', function(table) {
    table.increments('id');

    table.integer('quantity').notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete("CASCADE");
    table.integer('dish_id').references('id').inTable('dishes').onDelete("CASCADE");
    table.timestamp('created_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('orders');