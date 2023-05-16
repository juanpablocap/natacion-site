const express = require('express')
const app = express();
const users = require('./routes/users')
const { connectDB } = require('./db/db'); //db.js file to mongo connect


app.use(express.json());  // todo lo convierte o parsea a json para poder utilizar 
app.use(express.urlencoded({extended:true})); // 
require('dotenv').config();  //con dotenv puedo leer varuables de entorno de env
connectDB();

app.use('/users', users);


//servidor
app.listen(process.env.PORT, ()=> {
    console.log("Update ok! - Server Backend on port " + process.env.PORT);
})