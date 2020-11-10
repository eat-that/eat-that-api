'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstablishmentType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EstablishmentType.belongsTo(models.Establishment, {foreignKey: 'establishmentId'})
      EstablishmentType.belongsTo(models.Type, {foreignKey: 'typeId'})
    }
  };
  EstablishmentType.init({
    typeId: DataTypes.UUID,
    establishmentId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'EstablishmentType',
  });
  return EstablishmentType;
};