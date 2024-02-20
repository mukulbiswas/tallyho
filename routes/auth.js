const express = require('express')
const router = express.Router()
const authController = require('../controllers/AuthController');

// define the about route
router.post('/login', authController.login);
router.post('/register', authController.register);


module.exports = router