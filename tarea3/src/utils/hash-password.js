const crypto = require('crypto');

module.exports = function(pwd){
    pwd = pwd || '';
    const hashedPwd = crypto.scryptSync(pwd,process.env.SECRET_KEY,24);
    return hashedPwd.toString('hex');
    //console.log(hashedPwd)
    //return hashedPwd
}