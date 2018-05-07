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

const cartItem = bookshelf.Model.extend({
  tableName: 'cart_items',
  shopItem: function () {
    return this.belongsTo(shopItem)
  },
  user: function() {
    return this.belongsTo(User)
  }
})

module.exports = cartItem