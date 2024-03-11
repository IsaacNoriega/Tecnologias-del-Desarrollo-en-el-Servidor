const { Schema , model } = require('mongoose');

const userSchema = new Schema({

    name : { type : String , required : true },
    email : { type : String , required : true },
    password : { type : String , required : true },
    status : { type : String , default : 'new' },
    rol : { type : String , default : 'user' }

});

module.exports = model('users', userSchema);