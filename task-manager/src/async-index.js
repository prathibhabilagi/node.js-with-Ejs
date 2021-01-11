const express = require('express');
require('./db/mongoose')
const User = require('./models/user');
const Tasks = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.post('/users', (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    }catch(e){
        res.status(400).send(e);
    }
});

app.get('/users', (req,res) => {
    try{
        const users = await User.find({});
        res.status(201).send(users);
    }catch(e){
        res.status(500).send(e);
    }
});

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if(!User){
            return res.status(404).send();
        }
        res.status(200).send(user);
    }catch(e){
        res.status(500).send(e);
    }
});

app.post('/tasks', (req, res) => {
    const task = new Tasks(req.body);

    try{
        const task = await task.save();
        res.send(task);
    }catch{
        res.status(400).send(e);
    }
})

app.get('/tasks', (req, res) => {
    try{
        const tasks = await Tasks.find();
        res.send(tasks);
    }catch{
        res.status(500).send();
    } 
});

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;

    try{
        const task = await Tasks.findById(_id);
        res.send(task);
    }catch{
        res.status(500).send();
    }
})

app.listen(port, () => {
    console.log('Sever started on port '+port);
}); 
