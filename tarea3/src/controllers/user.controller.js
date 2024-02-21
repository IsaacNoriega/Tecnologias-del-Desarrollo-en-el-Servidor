const statusResponse = require('../utils/response-code'); // Importacion de estatus
const User = require('../models/user');


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
        const newUser = req.body;
        User.create(newUser).then(response =>{
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
    register(req,res){
        const data = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.email
        }
        User.create(data).then(response =>{
            res.status(statusResponse.SUCCESS).send(`User ${data.name} creado con exito`);
        })
        .catch(e=>{
            console.log('Error:' + e);
            res.status(statusResponse.BAD_REQUEST).send('Failed to create user');
        })
    }

    //POST para verificar un usuario
    login(req,res){
        const email = req.body.email;
        const password = req.body.password;

        if(User.findOne(email)&& User.findOne(password)){
            res.status(statusResponse.SUCCESS).send(`User encontrado con exito`);
        }else{
            res.status(statusResponse.BAD_REQUEST).send('Failed to find user');
        }
    }
}

module.exports = new userController()