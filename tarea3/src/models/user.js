const {Schema, model} = require('mongoose'); 

//Estructura del esquema

const userSchema = new Schema({
    name : { type : String , required : true},
    email : { type : String , required : true },
    password : { type : String , required : true },
    status : { type : String , default:'new' },
    role :  { type : String , default : 'student' }
});


module.exports = model('users',userSchema);