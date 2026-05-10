const { Router } = require('express')
const controller = require("../controllers/profesores.controller")
const route = Router()

route.get('/profesores', controller.getProfesores)
route.get('/profesores/:id', controller.getProfesorById)
route.put('/profesores', controller.updateProfesor)
route.post('/profesores', controller.createProfesor)
route.delete('/profesores', controller.deleteProfesor)

module.exports = route