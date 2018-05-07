exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('shop_items', function (table) {
    table.increments('id').primary()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    table.string('itemName').notNullable()
    table.string('itemDescription').notNullable()
    table.integer('price').notNullable()
    table.string('img').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shop_items')
};
