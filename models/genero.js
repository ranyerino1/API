const mongoose = require('mongoose')

const generoSchema = mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
    nombreGenero:{
        type:String,
        required: true
    },
    estadoGenero:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('genero', generoSchema)