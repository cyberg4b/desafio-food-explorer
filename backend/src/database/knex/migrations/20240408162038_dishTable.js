exports.up = knex => knex.schema.createTable('dishes', function(table) {
    table.increments('id');

    table.text('image');
    table.text('title').notNullable();
    table.text('description').notNullable();

    table.enum('category', ["snack", "dessert", "drink"], { useNative: true, enumName: "categorys" }).notNullable().default("snack")
    table.decimal('price').notNullable();

    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('dishes');