const router = require('express').Router()
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../middleware/verifyToken')
const UserController = require('../controllers/user')

router.put('/:id', verifyTokenAndAuthorization, UserController.updateUser)

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, UserController.deleteUser)

// GET USER BY ID
router.get('/find/:id', verifyTokenAndAdmin, UserController.getUserById)

// GET ALL USERS
router.get('/', verifyTokenAndAdmin, UserController.getAllUsers)

// GET USER STATS
router.get('/stats', verifyTokenAndAdmin, UserController.getUserStats)

module.exports = router
