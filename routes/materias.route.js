const {Router} = require('express') //Importa Router desde Express
const {getMaterias, getMateriaById} = require('../controllers/materias.controller') //Importa funciones del controlador

const route = Router() //Crea un objeto router, aca se guardan las rutas

route.get('/materias', getMaterias)
route.get('/materias/:id', getMateriaById)

module.exports = route //Exporta las rutas.

//Router() sirve para crear rutas separadas y organizadas.