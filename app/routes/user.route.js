const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.post('/',userController.createUser);

router.post('/login',userController.getUserByLogin);

module.exports = router;