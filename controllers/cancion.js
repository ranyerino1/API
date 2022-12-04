const cancionSchema = require('../models/cancion')
const album = require('../models/album')

//consultar todos los usuarios
exports.consultar = async (req, res) => {
    cancionSchema.find().populate('album', {
        "_id": 1,
        "nombreAlbum": 1,
        "anioPublicacion": 1,
        "estadoAlbum": 1,
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}

//crear usuario
exports.registrar = async (req, res) => {
    const cancion = cancionSchema(req.body)
    const buscaAlbum = await album.findById(cancion.album);
    cancion.album = buscaAlbum._id
    cancion.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}

//consultar por id
exports.consultarId = async (req, res) => {
    const{ id } = req.params
    cancionSchema.findById(id).populate('album', {
        "_id": 1,
        "nombreAlbum": 1,
        "anioPublicacion": 1,
        "estadoAlbum": 1,
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}

//actualizar
exports.actualizar = async (req, res) => {
    const{ id } = req.params
    const{ nombreCancion, fechaGrabacion, duracionCancion, estadoCancion} = req.body 
    cancionSchema.updateOne({_id: id}, { $set: {nombreCancion, fechaGrabacion, duracionCancion, estadoCancion} })
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}

//borrar 
exports.borrar = async (req, res) => {
    const{ id } = req.params
    cancionSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}