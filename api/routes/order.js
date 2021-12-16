const router = require('express').Router()
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} = require('../middleware/verifyToken')
const OrderController = require('../controllers/order')

// CREATE
router.post('/', verifyToken, OrderController.create)

// UPDATE
router.put('/:id', verifyTokenAndAdmin, OrderController.update)

// DELETE
router.delete('/:id', verifyTokenAndAdmin, OrderController.delete)

// GET USER ORDERS
router.get(
  '/find/:userId',
  verifyTokenAndAuthorization,
  OrderController.getUserOrders
)

// GET ALL
router.get('/', verifyTokenAndAdmin, OrderController.getAllOrders)

// GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, OrderController.monthlyIncome)

module.exports = router
