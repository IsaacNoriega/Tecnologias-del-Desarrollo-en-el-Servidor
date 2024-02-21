const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


router.get('',(req,res)=>{
    res.send('Estas en Auth')
})

router.post('/signup',userController.register);
router.post('/login',userController.login);

module.exports = router;