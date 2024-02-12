const axios = require('axios'); //Para las peticioes HTTP
const statusResponse = require('../utils/response-code'); // Importacion de estatus
require('dotenv').config() //Lectura del .env

let url = process.env.URL;

class userController{

    //GET usuarios
    async getUsers(req,res){
        try{
            const response = await axios.get(`${url}/posts`)
            res.status(statusResponse.SUCCESS).json(response.data);
        }catch(error){
            res.status(statusResponse.BAD_REQUEST).json({error :'Error en la peticion a JSONPlaceholder'});
        }
    }

    //GET usuarios por id
    async getUserById(req,res){
        try{
            const userId = req.params.id;
            const response = await axios.get(`${url}/posts/${userId}`);
            res.status(statusResponse.SUCCESS).json(response.data);
        }catch(error){
            res.status(statusResponse.BAD_REQUEST).json({error :'Error en la peticion a JSONPlaceholder'});
        }
    }

    //POST de un usuario
    async createUser(req,res){
        try{
            const newUser = req.body;
            const response = await axios.post(`${url}/posts`,newUser);
            res.status(statusResponse.SUCCESS).json(response.data);
        }catch(error){
            res.status(statusResponse.BAD_REQUEST).json({error :'Error en la peticion a JSONPlaceholder'});
        }
    }


    async updateUser(req,res){
        try{
            const userId = req.params.id
            const newData = req.body;
            const response = await axios.put(`${url}/posts/${userId}`,newData);
            res.status(statusResponse.SUCCESS).json(response.data);

        }catch(error){
            res.status(statusResponse.BAD_REQUEST).json({ error: 'Error en la solicitud a JSONPlaceholder' });

        }
    }

    async deleteUser(req,res){
        try{
            const id = req.params.id;
            const response= await axios.delete(`${url}/posts/${id}`);
            res.status(statusResponse.SUCCESS).json(response.data);
        }catch(error){
            res.status(statusResponse.BAD_REQUEST).json({ error: 'Error en la solicitud a JSONPlaceholder' });
        }
    }
}

module.exports = new userController()