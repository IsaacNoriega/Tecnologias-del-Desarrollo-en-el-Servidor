const express = require('express');
const router = express.Router();
const userRoutes = require('./users'); //Rutas especificas para el usuario

router.use('',userRoutes);

router.get('/',(req,res)=>{
    res.send(`Hola este es un mensaje del servidor`);
});

module.exports= router;
