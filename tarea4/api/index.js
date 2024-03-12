require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const router = require('./src/routes/routes');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path')



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars',engine());
app.set('view engine' , 'handlebars')
app.set('views','./src/views');

app.use(router);

app.use('/assets',express.static(path.join(__dirname , 'public')));

let port = process.env.PORT || 3000;
let db_url = process.env.DB_URL


mongoose.connect(db_url).then(
    app.listen(port , ()=>{
        console.log('App is running on port ' + port + ' :)')
    })
).catch(
    error => console.log('Falla:', error) 
)
