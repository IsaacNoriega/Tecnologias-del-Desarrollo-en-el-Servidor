const express = require('express'); //Importacion del modulo express
require('dotenv').config() //Lectura del .env
const routes = require('./src/routes/routes'); //Importacion de rutas del archivo routes
const app = express(); //Instancia para el manejo de rutas


const port = process.env.PORT;  //Puerto de la API

app.use(routes) //Uso de rutas del archivo routes


app.listen(port,()=>{
    console.log('App is running on port '+ port);
})
