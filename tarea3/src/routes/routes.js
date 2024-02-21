const express = require('express');
const router = express.Router();
const userRoutes = require('./users'); //Rutas especificas para el usuario
const authRoutes = require('./auth');

router.use(express.json());

router.use('',userRoutes);
router.use('/auth',authRoutes);

router.get('/',(req,res)=>{
    res.send(`Hola este es un mensaje del servidor`);
});

module.exports= router;
