const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news-controller')
const authMiddleware = require('../middleware/auth')


router.get('/info',newsController.getNews);

module.exports = router

