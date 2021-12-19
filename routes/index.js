const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/profile', userController.getProfile);

module.exports = router;