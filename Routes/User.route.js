const express = require('express');
const router = express.Router({mergeParams: true});


const UserController = require('../Controllers/User.Controller');

router.get('/', UserController.getAllUser);
router.get('/:id',UserController.findUserById);
router.post('/',UserController.createNewUser);
router.post('/signin', UserController.signin);
router.patch('/:id',UserController.updateUserById);
router.delete('/:id',UserController.deleteUserById);

module.exports = router;