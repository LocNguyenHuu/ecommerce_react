const knex = require('knex')({
  client: 'postgresql',
  connection: {
    database: 'E-commerce',
    user: 'AnthonyWong',
    password: ''
  }
})

const bookshelf = require('bookshelf')(knex)

const User = bookshelf.Model.extend({

})

module.exports = User