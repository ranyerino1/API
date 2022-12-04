const albumSchema = require('../models/album')
const generoId = require('../models/genero')

//consultar todos los albums
exports.consultar = async (req, res) => {
    albumSchema.find().populate('genero', {
        "_id": 1,
        "nombreGenero": 1,
        "estadoGenero": 1
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }))
}

//crear album
exports.registrar = async (req, res) => {
    const album = albumSchema(req.body)
    const buscaGenero = await generoId.findById(album.genero);
    album.genero = buscaGenero._id
    album.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }))

}

//consultar por id
exports.consultarId = async (req, res) => {
    const { id } = req.params
    albumSchema.findById(id).populate('genero', {
        "_id": 1,
        "nombreGenero": 1,
        "estadoGenero": 1
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }))
}

//actualizar
exports.actualizar = async (req, res) => {
    const { id } = req.params
    const { nombreAlbum, anioPublicacion, estadoAlbum } = req.body
    albumSchema.updateOne({ _id: id }, { $set: { nombreAlbum, anioPublicacion, estadoAlbum } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }))
}

//borrar 
exports.borrar = async (req, res) => {
    const { id } = req.params
    albumSchema.remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }))
}