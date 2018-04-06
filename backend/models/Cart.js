const knex = require('knex')({
  client: 'postgresql',
  connection: {
    database: 'E-commerce',
    user: 'AnthonyWong',
    password: ''
  }
})

const bookshelf = require('bookshelf')(knex)

const Cart = bookshelf.Model.extend({

})

module.exports = Cart