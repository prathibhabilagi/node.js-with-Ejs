const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Sever started on port '+port);
}); 
