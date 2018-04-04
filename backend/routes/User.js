const express = require('express')
      router = express.Router()

router.get('/user', (req, res) => {
  res.send('new user')
})

router.post('/newUser', (req, res) => {
  console.log(req.body)
})

router.put('/updateInfo', (req, res) => {
  console.log(req.params)
})

module.exports = router