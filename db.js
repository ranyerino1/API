const mongoose = require('mongoose');
require('dotenv').config()
const conexionBD=async()=>{
    
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Conexión exitosa");
    }
    catch(error){
        console.log(error);
    }
}

module.exports=conexionBD;