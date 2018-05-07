exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    table.string('username').unique().notNullable()
    table.string('password').notNullable()
    table.string('email').unique().notNullable()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
