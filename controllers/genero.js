const generoSchema = require('../models/genero')

//consultar todos los usuarios
exports.consultar = async (req, res) => {
    generoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}

//crear usuario
exports.registrar = async (req, res) => {
    const genero = generoSchema(req.body)
    genero.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}

//consultar por id
exports.consultarId = async (req, res) => {
    const{ id } = req.params
    generoSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}

//actualizar
exports.actualizar = async (req, res) => {
    const{ id } = req.params
    const{ nombreGenero, estadoGenero } = req.body 
    userSchema.updateOne({_id: id}, { $set: {nombreGenero, estadoGenero} })
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}

//borrar 
exports.borrar = async (req, res) => {
    const{ id } = req.params
    generoSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
}