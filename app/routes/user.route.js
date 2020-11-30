const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAllUsers);
router.post('/',userController.createUser);
router.put('/',userController.updateUser);

router.delete('/:id',userController.deleteUser);
router.get('/:email',userController.getUserByEmail);


module.exports = router;