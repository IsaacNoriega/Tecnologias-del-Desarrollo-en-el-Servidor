const status = require('../utils/response-code');
const auth = process.env.TOKEN;  


const authUser = {
    id : 1,
    role : 'admin',
    name: 'John Doe'
}

const middleware = (req,res,next)=>{
    const { token } = req.query;
    if(token && token === auth){
        req.user = {...authUser};
        next();
    }else{
        res.sendStatus(status.UNAUTHENTICATED);
    }
} 

module.exports = middleware;