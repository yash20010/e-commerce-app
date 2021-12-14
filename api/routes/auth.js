const router = require('express').Router()
const AuthController = require('../controllers/auth')

// REGISTER USER
router.post('/register', AuthController.register)

// LOGIN USER
router.post('/login', AuthController.login)

module.exports = router
