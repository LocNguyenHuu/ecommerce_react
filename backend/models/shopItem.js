const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host: 'localhost',
    database: 'E-commerce',
    user: 'postgres',
    password: ''
  }
})

const bookshelf = require('bookshelf')(knex)

const shopItem = bookshelf.Model.extend({
  tableName: 'shop_items',
  cartItems: function() {
    return this.hasMany(cartItem)
  }
})

module.exports = shopItem