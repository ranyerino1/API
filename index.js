const express = require('express')
const conexionBD = require('./db');
const app = express()
const PORT = process.env.PORT || 3000
conexionBD()
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.use(express.json())

app.use('/', require('./routes/Routes'))

app.listen(PORT, () =>{
    console.log(port);
})