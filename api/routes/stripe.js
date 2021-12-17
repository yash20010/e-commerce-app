const router = require('express').Router()
const StripeController = require('../controllers/stripe')

router.post('/payment', StripeController.payment)

module.exports = router
