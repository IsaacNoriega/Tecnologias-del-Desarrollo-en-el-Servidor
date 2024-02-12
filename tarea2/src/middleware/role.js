const status = require('../utils/response-code');


const authUser = {
    id : 1,
    role : 'admin',
    name: 'John Doe'
}

function userRole(roles){
    return (req,res,next) => {
        if(!(roles.includes(authUser.role))){
            return res.sendStatus(status.FORBIDDEN)
        }
        next();
    }
}

module.exports = userRole;