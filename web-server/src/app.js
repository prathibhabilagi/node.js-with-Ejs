const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
const request = require('request');

const app = express();

//Define paths for Express config
const pubdirName = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(pubdirName));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
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
        title: 'Help Page',
        name: 'Kim Tae Hyung'
    });
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        res.send({
            error: 'You didnt provide a address'
        })
    }
    else {
        geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
            if(error){
                return res.send({ error });
            }
            
            forecast(latitude, longitude, (error, forecastData) =>{
            if(error){
                return res.send({ error });
            }

            res.send({
                forecast: forecastData, location,
                address: req.query.address
            })
            })
        })
    }
});

app.get('/help/*', (req, res) =>{
    res.render('error', {
        title: '404',
        name: 'V',
        message: 'Article Not Found'
    });
})

app.get('*', (req, res) =>{
    res.render('error', {
        title: '404',
        name: 'V',
        message: '404 Page Not Found'
    })
})

app.listen(3000, () => {
    console.log('Server Started');
})
