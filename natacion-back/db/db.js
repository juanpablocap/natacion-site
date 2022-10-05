// coneccion a mongodb 
const mongoose = require('mongoose');

const connectDB = async () =>{
  try {
    mongoose.connect(process.env.DATABASE_URI);
    console.log('DB Connected ok!');
  }  
  catch (error) 
  {
    console.log('Error en la coneccion a la MongoDB!')
  }
} 


module.exports = { connectDB }

//mongo atlas cluster
//user1:juanpablocap
//pass: natacion1234


//user2:admin   usando con mongo atlas
//pass:admin1234