const status = require('../utils/response-code');


const authUser = {
    id : 1,
    role : 'admin',
    name: 'John Doe'
}

const middleware = (req,res,next)=>{
    const { token } = req.query;
    if(token && token === '12345'){
        req.user = {...authUser};
        next();
    }else{
        res.sendStatus(status.UNAUTHENTICATED);
    }
} 

module.exports = middleware;