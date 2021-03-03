const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

const url = "https://newsapi.org/v2/everything?q=ethereum&from=2021-03-02&apiKey=api";


app.get("/", async function(req, res){
    const articleData = await fetch(url);
    const data = await articleData.json();
    const id = data.articles.source;
    console.log((id));
    res.render('index', {articles: data.articles});
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})
