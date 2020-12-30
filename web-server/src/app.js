const path = require('path');
const express = require('express');

const app = express();

const pubdirName = path.join(__dirname, '../public');

app.use(express.static(pubdirName));

app.get('', (req, res) => {
    res.send(index.html);
});

app.get('/about', (req, res) => {
    res.render(about.html);
});

app.get('/help', (req, res) =>{
    res.send(help.html);
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
