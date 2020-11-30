'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstablishmentKitchen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EstablishmentKitchen.belongsTo(models.Establishment, {foreignKey: 'establishmentId'})
      EstablishmentKitchen.belongsTo(models.Kitchen, {foreignKey: 'infrastructureId'})
    }
  };
  EstablishmentKitchen.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: require("sequelize").UUIDV4
    },
    kitchenId: DataTypes.UUID,
    establishmentId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'EstablishmentKitchen',
  });
  return EstablishmentKitchen;
};