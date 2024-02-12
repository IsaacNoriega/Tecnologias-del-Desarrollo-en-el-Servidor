const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth');
const roleMiddleware = require('../middleware/role');

const roles = ['user','admin','owner']

//Rutas de usuario
router.get('/users',authMiddleware,userController.getUsers);
router.get('/user/:id',authMiddleware,userController.getUserById);

router.post('/user',authMiddleware,roleMiddleware(roles),userController.createUser);
router.put('/user/:id',authMiddleware,roleMiddleware(roles),userController.updateUser);
router.delete('/user/:id',authMiddleware ,roleMiddleware(roles),userController.deleteUser);
module.exports= router;