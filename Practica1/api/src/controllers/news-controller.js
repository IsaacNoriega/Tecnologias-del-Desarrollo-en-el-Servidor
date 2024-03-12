const axios = require('axios');

const apiKey = process.env.API_KEY;

class newsController{

    getNews(req,res){
        const { search } = req.query;
        console.log(search)
        axios.get(`https://newsapi.org/v2/top-headlines?country=${search}&apiKey=${apiKey}`).
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