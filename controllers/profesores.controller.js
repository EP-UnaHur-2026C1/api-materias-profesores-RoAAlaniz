const {profesor} = require("../models")
const controller = {}

const getProfesores = async(req, res)=>{
    try{
        const profesores = await Profesor.findAll()
        if(! profesores){
            res.status(404).json({message:"No hay profesores."})
            return
        }
        res.status(200).json(profesores)
    }
    catch(err){
        res.status(500).json({message: "Error al buscar profesores."})
    }
}
controller.getProfesores = getProfesores

const getProfesorById = async(req, res)=>{
    try{
        const id = req.params.id
        const profe = await Profesor.findByIdPk(id)
        if (!profe){
            res.status(404).json({message:"Profesor no encontrado."})
            return
        }
        res.status(200).json(profe)
    } catch(err){
        res.status(500).json({message:"Error al buscar profeor."})
    }
}
controller.getProfesorById = getProfesorById

const createProfesor = async(req, res)=>{
    try{
        const nuevoProfe = req.body
        const profe = await Profesor.create(nuevoProfe)
        res.status(201).json(profe)
    } catch(err){
        res.status(500).json({message:"Error al crear un profesor."})
    }
}
controller.createProfesor = createProfesor 

const updateProfesor = async(req, res)=>{
    try{
        const id = req.params.id
        const actualizar =  req.body
        const profe = await Profesor.finfByPk(id)
        if(!profe){
            res.status(404).json({message:"Profesor no encontrado."})
            return
        }
        await profe.update(actualizar)
        res.status(200).json(profe)
    } catch(err){
        res.status(500).json({message:"Error al actualizar."})
    }
}
controller.updateProfesor = updateProfesor

const deleteProfesor = async(req, res)=>{
    try{
        const id = req.params.id
        const profe = await Perfesor.findByPk(id)
        if(!profe){
            res.status(404).json({message:"Error al buscar profesor."})
            return
        }
        await profe.destroy()
        res.status(200).json({message: "Pofesor eliminado correctamente"})
    } catch(err){
        res.status(500).json({message: "Error al eliminar profesor."})
    }
}
controller.deleteProfesor = deleteProfesor

module.exports = {getProfesores, getProfesorById, updateProfesor, createProfesor, deleteProfesor}