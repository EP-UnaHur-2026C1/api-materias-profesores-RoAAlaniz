'use strict'; //Evita ciertos errores y malas prácticas.
const { //Importa la clase Model de Sequelize.
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => { //Exporta una función.
  class Materia extends Model {//Crea una clase llamada Materia. 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { //Método usado para definir relaciones entre tablas.
      // define association here
    }
  }
  Materia.init({ //Define las columnas de la tabla.
    nombre: DataTypes.STRING,
    codigo: DataTypes.STRING,
    activa: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia; //Devuelve el modelo ya creado.
};

//sequelize → la conexión a la base de datos.
//DataTypes → tipos de datos disponibles.