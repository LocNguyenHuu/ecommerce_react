const express = require('express')
router = express.Router()

router.get('/inventory', (req, res) => {
  res.send('this is my cart')
})

router.post('/addToStore', (req, res) => {
  console.log(req.body)
})

router.delete('/deleteShop/:itemId', (req, res) => {
  console.log(req.params)
})

module.exports = router