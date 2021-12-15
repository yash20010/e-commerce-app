const router = require('express').Router()
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} = require('../middleware/verifyToken')
const CartController = require('../controllers/cart')

// CREATE
router.post('/', verifyToken, CartController.create)

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, CartController.update)

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, CartController.delete)

// GET USER CART
router.get(
  '/find/:userId',
  verifyTokenAndAuthorization,
  CartController.getUserCart
)

// GET ALL
router.get('/', verifyTokenAndAdmin, CartController.getAll)

module.exports = router
