const express = require('express')
const router = express.Router()
const cntrPer = require('../controllers/genero')
const cntrCan = require('../controllers/cancion')
const cntrAlbum = require('../controllers/album')

//ruta principal

router.get('/', (req, res) => {
    res.render('principal')
})

//obtener todos los generos
router.get('/genero', cntrPer.consultar)

//crear genero
router.post('/genero', cntrPer.registrar)

//econtrar genero especifico
router.get('/genero/:id', cntrPer.consultarId)

//actualizar genero
router.put('/genero/:id', cntrPer.actualizar)

//borrar genero
router.delete('/genero/:id', cntrPer.borrar)

//------------------------------------------------

//obtener todos los albums
router.get('/album', cntrAlbum.consultar)

//crear album
router.post('/album', cntrAlbum.registrar)

//econtrar album especifico
router.get('/album/:id', cntrAlbum.consultarId)

//actualizar album
router.put('/album/:id', cntrAlbum.actualizar)

//borrar album
router.delete('/album/:id', cntrAlbum.borrar)


//------------------------------------------------

//obtener todos los canciones
router.get('/cancion', cntrCan.consultar)

//crear cancion
router.post('/cancion', cntrCan.registrar)

//econtrar cancion especifica
router.get('/cancion/:id', cntrCan.consultarId)

//actualizar cancion
router.put('/cancion/:id', cntrCan.actualizar)

//borrar cancion
router.delete('/cancion/:id', cntrCan.borrar)


module.exports = router