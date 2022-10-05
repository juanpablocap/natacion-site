const express = require('express')
const app = express();
const users = require('./routes/users')
const { connectDB } = require('./db/db'); //db.js file to mongo connect


app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('dotenv').config();
connectDB();

app.use('/users', users);


//servidor
app.listen(5000, ()=> {
    console.log("Update ok! - Server Backend port 5000" + process.env.PORT);
})