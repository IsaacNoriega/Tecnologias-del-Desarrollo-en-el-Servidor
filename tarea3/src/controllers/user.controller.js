const statusResponse = require('../utils/response-code'); // Importacion de estatus
const User = require('../models/user');
const hashPassword = require('../utils/hash-password');
const jwt = require('jsonwebtoken');

class userController{

    //GET usuarios
    getUsers(req,res){
        User.find().then( response =>{
            res.send(response);
        })
        .catch( e =>{
            res.status(statusResponse.BAD_REQUEST).send('Something went wrong');
        });   
    }

    //GET usuarios por ID
    getUserById(req,res){
        const userId = req.params.id
        User.findById(userId).then(response =>{
            res.send(response)
        })
        .catch( e =>{
            res.status(statusResponse.BAD_REQUEST).send('Something went wrong');
        }); 
    }

    //POST un nuevo usuario (admin)
    createUser(req,res){
           const data = {
           name : req.body.name,
           email : req.body.email,
           password : hashPassword(req.body.password)
        }
        User.create(data).then(response =>{
           res.status(statusResponse.SUCCESS).json(response)
        })
        .catch( e =>{
           res.status(statusResponse.BAD_REQUEST).send('Something went wrong');
        }); 
    }
    
    updateUser(req,res){
        const userId = req.params.id;
        const dataUpdate = req.body;
        User.findByIdAndUpdate(userId,dataUpdate).then(response=>{
            res.status(statusResponse.SUCCESS).send(response);
        })
        .catch(e =>{
            res.send(e);
        })
    }


    //DELETE usuario por ID
    deleteUser(req,res){
        const userId = req.params.id
        User.findByIdAndDelete(userId).then(response=>{
            res.status(statusResponse.SUCCESS).send(response);
        })
        .catch( e =>{
            res.status(statusResponse.BAD_REQUEST).send('Something went wrong');
        }); 
    }


    //POST de un nuevo usuario (Usuario)
    signup(req,res){
        const data = {
            name : req.body.name,
            email : req.body.email,
            password : hashPassword(req.body.password)
        }
        User.create(data).then(response =>{
            delete response.password;
            res.status(statusResponse.SUCCESS).send(response);
        })
        .catch(e=>{
            console.log('Error:' + e);
            res.status(statusResponse.BAD_REQUEST).send('Failed to create user');
        })
    }

    //POST para verificar un usuario
    // login(req,res){
    //     User.findOne({email : req.body.email,password : hashPassword(req.body.password)})
    //     .then(response =>{
    //             if(response){
    //                 const data ={
    //                     id: response._id,
    //                     name: response.name,
    //                     email: response.email,
    //                     role : response.role
    //                 }
    //             const token = jwt.sign(data,process.env.TOKEN_KEY);

    //             }else{

    //             }
    //         }).catch()
    //     }
    
}

module.exports = new userController()