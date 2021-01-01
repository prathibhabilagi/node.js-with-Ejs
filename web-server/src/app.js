const path = require('path');
const express = require('express');

const app = express();

const pubdirName = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(pubdirName));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Kim Tae Hyung'
    });
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'BTS Logo'
    });
});

app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'Help Page'
    });
})

app.get('/weather', (req, res) => {
    res.send([{
        forecast : '28 Degree',
        location : 'India'
    },
    {
        title: 'hello'
    }]);
});

app.listen(3000, () => {
    console.log('Server Started');
})
