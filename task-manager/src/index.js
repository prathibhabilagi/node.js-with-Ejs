const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Sever started on port '+port);
}); 

const jwt = require('jsonwebtoken');

const myFunction = async() =>{
    const token = jwt.sign({_id: 'abcd123'}, 'btsipurpleyou', {expiresIn: '7 days'});
    console.log(token);

    const data = jwt.verify(token, 'btsipurpleyou');
    console.log(data);
}

myFunction();
