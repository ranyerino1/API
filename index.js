const express = require('express')
const conexionBD = require('./db');
const app = express()
conexionBD()
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.use(express.json())

app.use('/', require('./routes/Routes'))

app.listen(3000, () =>{
    console.log(port);
})