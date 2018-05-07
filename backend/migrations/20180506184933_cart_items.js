exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('cart_items', function (table) {
    table.increments('id').primary()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    table.integer('users_id').references('id').inTable('user').notNullable()
    table.integer('shop_item_id').references('id').inTable('shop_items').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cart_items')
}
