const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    name:{
        type: String,
        trim:true,
        require:true,
        minlength:3,
        maxlength:15,
    },
    lastname:{
        type:String,
        trim:true,
        maxlenght: 15,
        require:true,
    },
    age:{
        type:Number,
        max:2,
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        require:true,
    },
    rol:{
        type:String,
        trim:true,
        require:true,
        enum:['jugador', 'admin', 'manager', 'entrenador']
    },
    cuotasPagas:{
        type:Object,
        enum:['enero', 'febrero'], //solo ejemplo
    }
},{
    versionKey:false, //eliminamos el _V 
    timestamps:true  // cargamos el tiempo que se creo
})

module.exports = model('User', UserSchema);