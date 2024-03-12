const statusResponse = require('../utils/response-code');
const jwt = require('jsonwebtoken');

const middleware = (req , res ,next) =>{
    const { token } = req.query;


  // Verificar si el token está presente
  if (token) {
    // Verificar el token
    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        // Si hay un error en la verificación del token
        return res.status(401).json({ mensaje: 'Token inválido' });
      } else {
        // Si el token es válido, se almacena el usuario decodificado en el objeto de solicitud para su uso posterior
        req.user = decoded;
        next(); // Continuar con la ejecución de la siguiente función en la ruta
      }
    });
  } else {
    // Si no se proporciona un token
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
  }
}

module.exports = middleware;