const crypto = require('crypto');

const key = process.env.SECRET_KEY

module.exports = function(pwd){
    pwd = pwd || '' ; 
    const hashedPwd = crypto.scryptSync(pwd,key,24);
    return hashedPwd.toString('hex');

}