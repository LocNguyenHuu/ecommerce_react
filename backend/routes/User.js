const express = require('express')
      router = express.Router()
      faker = require('faker')

router.get('/user', (req, res) => {
  res.send('new user')
})

router.post('/login', (req, res) => {
  console.log(req.body)
})

router.post('/newUser', (req, res) => {
  console.log(faker.internet.email())
  console.log(faker.internet.userName())
  console.log(faker.internet.password())
  console.log(req.body)
})

router.put('/updateInfo', (req, res) => {
  console.log(req.params)
})


module.exports = router