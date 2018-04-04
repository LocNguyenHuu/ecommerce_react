const express = require('express')
      router = express.Router()

router.get('/cart', (req, res) => {
  res.send('this is my cart')
})

router.post('/add', (req, res) => {
  console.log(req.body)
})

router.delete('/delete/:itemId', (req, res) => {
  console.log(req.params)
})

module.exports = router