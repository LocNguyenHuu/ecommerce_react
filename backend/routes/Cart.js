const express = require('express')
      router = express.Router()

router.get('/cart', (req, res) => {
  res.send('this is my cart')
})

router.post('/addToCart', (req, res) => {
  console.log(req.body)
})

router.put('/updateCart', (req, res) => {
  console.log(req.body)
})

router.delete('/deleteCart/:itemId', (req, res) => {
  console.log(req.params)
})

module.exports = router