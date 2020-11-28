const express = require('express');
let router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);

module.exports = router;