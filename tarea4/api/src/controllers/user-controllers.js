const jwt = require('jsonwebtoken');
const statusResponse = require('../utils/response-code');
const User = require('../models/user')
const hashPassword = require('../utils/hash-password');

class userController{
    

    //POST usuario (User)
    signUp(req,res){
        const data = {
            name : req.body.username,
            email : req.body.email,
            password : hashPassword(req.body.password)
        }
        console.log(data.email)
        console.log(data.username)
        console.log(data.password)
        User.create(data).then(response => {
            res.status(statusResponse.SUCCESS).render('index')
        }).catch( e => {
            res.status(statusResponse.BAD_REQUEST).send('Something went wrong');
        })
    }

    //POST para logear (User)
    login(req, res){
        const { email, password } = req.body;
        // Busca un usuario con el correo y la contraseña proporcionados
        User.findOne({ email: email, password: hashPassword(password) })
          .then(response => {
            if (response) {
              const data = {
                id: response._id,
                name: response.name,
                email: response.email,
                rol: response.rol
              };
              const token = jwt.sign(data, process.env.TOKEN_KEY);
              res.redirect(`/home?token=${token}`);

            } else {
              // Si no se encuentra el usuario, se envía un mensaje de error
              res.status(statusResponse.UNAUTHENTICATED).send('Credenciales inválidas');
            }
          })
          .catch(error => {
            res.status(statusResponse.BAD_REQUEST).send('Algo salió mal');
          });
      };

}

module.exports = new userController();