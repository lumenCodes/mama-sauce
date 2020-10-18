const router = require('express').Router


router.get('/order-food', (req, res) => {
  res.json( )
})
router.put('/order-food', (req, res) => {
  res.json()
})

router.get('/payment', (req, res) => {
    res.json()
})
router.post('/payment', (req, res) => {
  res.json()
})
router.get("/", (req, res) => {
   res.json() // handle root
})

// route to get menu
router.get('/food-menu', (req, res) => {
  res.json()
})

module.exports = router