const express = require('express')
      faker = require('faker')
      bodyParser = require('body-parser')
      app = express()

// ROUTES
const Cart = require('./routes/cart')
const User = require('./routes/user')

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

app.use('/', Cart, User)


app.listen(6060, () => {
  console.log('Tune in on port 6060')
})