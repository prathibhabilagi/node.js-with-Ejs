// CRUD -> Create, Read, Update and Delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
//const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // <--------------------------- Insert ---------------------------->


    // db.collection('users').insertMany([
    //     {
    //         name: 'Tae',
    //         age: 26
    //     },
    //     {
    //         name: 'Jimin',
    //         age: 26
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         console.log('Unable to insert document');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'jin',
    //     age: 30
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // })



    // db.collection('tasks').insertMany([
    //     {
    //         task: 'BTS MV',
    //         completed: true
    //     },
    //     {
    //         task: 'seoul',
    //         completed: false
    //     },
    //     {
    //         task: 'BTS Concert',
    //         completed: false
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         return console.log('Uable to insert document');
    //     }

    //     console.log(result.ops);
    // })




    // <---------------------------------- Find ------------------------------->


    // db.collection('tasks').findOne({_id: new ObjectID('5ff5668c16e6bb05741875d8')}, (error, task) =>{
    //     console.log(task);
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, task) =>{
    //     console.log(task);
    // });

    // db.collection('users').findOne({
    //     _id: new ObjectID('5ff5606fad149e0502a4119e')
    // }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({age: 26}).toArray((error, user) => {
    //     console.log(user);
    //     })
    // })


    //  <-----------------------------  Update  ----------------------------------->
   

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5ff5606fad149e0502a4119e')
    // },{
    //     $set: {
    //         name: 'RM'
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })


    //  <---------------------------------  Delete  --------------------------------->


    // db.collection('tasks').deleteOne({
    //     _id: new ObjectID('5ff5668c16e6bb05741875d8')
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error) =>{
    //     console.log(error)
    // })


    // db.collection('users').deleteMany({
    //     age: 30
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
});
