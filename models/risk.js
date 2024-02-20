'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Risk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Risk.init({
    id: {primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    createdat: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    owner: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Risk',
  });
  return Risk;
};