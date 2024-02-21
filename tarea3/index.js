const mongoose = require('mongoose')
const express = require('express'); //Importacion del modulo express
const routes = require('./src/routes/routes'); //Importacion de rutas del archivo routes
require('dotenv').config();

const app = express(); //Instancia para el manejo de rutas
app.use(routes) //Uso de rutas del archivo routes


let port = process.env.PORT || 3000;  //Puerto de la API
const db_url = process.env.DB_URL;

//Connect to DataBase
mongoose.connect(db_url).then(
    app.listen(port,()=>{
        if(process.env.NODE_ENV === 'dev'){
            console.log('App is running on port '+ port);

        }else{
            console.log('App is running ');
        }
    })
).catch(
    error => console.log('Error:' + error)
)

