const {Materia} = require('../models') //Importa el modelo Materia desde la carpeta models.

const getMaterias = async (req, res)=>{ //Es async porque va a trabajar con operaciones asincrónicas (consultas a base de datos).
  const materias = await Materia.findAll({}) //await espera a que termine la consulta antes de continuar.
  console.log(materias) //Muestra las materias en la consola del servidor.
    res.status(200).json(materias) //Envía la respuesta al cliente. 200 significa “OK”.
}
const getMateriaById = (req, res)=>{ //Función para obtener una materia por ID.
    const id = req.params.id //Obtiene el parámetro id de la URL.
    res.status(200).json({id}) //Envía la respuesta al cliente. 200 significa “OK”.
}

module.exports = {getMaterias, getMateriaById} //Exporta las funciones para poder usarlas en otro archivo.

//req = request (lo que llega del cliente).
//res = response (lo que se devuelve al cliente).