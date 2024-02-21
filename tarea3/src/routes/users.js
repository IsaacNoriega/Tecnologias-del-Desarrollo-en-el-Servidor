const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth');
const roleMiddleware = require('../middleware/role');

const roles = ['user','admin','owner']
router.use('',authMiddleware,roleMiddleware(roles));

//Rutas de usuario
router.get('/users',authMiddleware,userController.getUsers);
router.get('/users/:id',userController.getUserById);
router.post('/users',userController.createUser);
router.put('/users/:id',userController.updateUser);
router.delete('/users/:id',userController.deleteUser);

module.exports= router;