const router = require('express').Router()
const { verifyTokenAndAdmin } = require('../middleware/verifyToken')
const ProductController = require('../controllers/product')

// CREATE
router.post('/', verifyTokenAndAdmin, ProductController.create)

// UPDATE
router.put('/:id', verifyTokenAndAdmin, ProductController.update)

// DELETE
router.delete('/:id', verifyTokenAndAdmin, ProductController.delete)

// GET PRODUCT BY ID
router.get('/find/:id', ProductController.getProductById)

// GET ALL PRODUCTS
router.get('/', ProductController.getAllProducts)

module.exports = router
