const axios = require('axios');

const apiKey = process.env.API_KEY;

class newsController{

    getNews(req,res){
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`).
        then( response => {
            res.render('news',{
                data : response.data.articles
            })
        }).catch( e => {
            res.send('Error')
        })
    }



}

module.exports = new newsController();