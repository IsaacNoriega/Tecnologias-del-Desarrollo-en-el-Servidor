const express = require('express');
const router = express.Router();
const userRoutes = require('./users');
const authRoutes = require('./auth')
const authMiddleware = require('../middleware/auth');

router.use(express.json());
router.use('',userRoutes);
router.use('/auth',authRoutes);


router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login', (req, res)=>{
    res.render('login'); 
  });

router.get('/signup',(req, res)=>{
    res.render('signup'); 
});

router.get('/home',authMiddleware,(req,res)=>{
    res.render('home')
})

  

module.exports = router;