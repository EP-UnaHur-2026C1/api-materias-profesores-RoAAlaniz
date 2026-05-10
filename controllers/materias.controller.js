const {Materia} = require('../models') //Importa el modelo Materia desde la carpeta models.

const getMaterias = async (req, res)=>{ //Es async porque va a trabajar con operaciones asincrónicas (consultas a base de datos).
  const materias = await Materia.findAll({}) //await espera a que termine la consulta antes de continuar.
  console.log(materias) //Muestra las materias en la consola del servidor.
    res.status(200).json(materias) //Envía la respuesta al cliente. 200 significa “OK”.
  }

const getMateriaById = (req, res)=>{ //Función para obtener una materia por ID.
  try{
    const id = req.params.id
    const materias = await Materia.findByPk(id) //await espera a que termine la consulta antes de continuar.
    res.status(200).json(materias)
  } catch(err){
    res.status(500).json({message: err.message})
  }
}

const createMateria = (req, res)=>{
  try{
    const nuevaMateria = req.body
    const materias = await Materia.create(nuevaMateria) 
    res.status(200).json(materias)
  }catch(err){
    res.status(500).json({message: "Error al crear materia"})
  }
}

module.exports = {getMaterias, getMateriaById, createMateria}

//req = request (lo que llega del cliente).
//res = response (lo que se devuelve al cliente).