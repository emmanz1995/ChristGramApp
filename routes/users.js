const express = require('express');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin');
const UserController = require('../controller/userController');

router.get('/me', requireLogin, UserController.getMe);

module.exports = router;
