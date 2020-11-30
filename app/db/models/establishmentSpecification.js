'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstablishmentSpecification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // EstablishmentSpecification.belongsTo(models.Establishment, { foreignKey : 'establishmentId'})
      // EstablishmentSpecification.belongsTo(models.Specification, { foreignKey : 'specificationId'})
    }
  };
  EstablishmentSpecification.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: require("sequelize").UUIDV4
    },
    specificationId: DataTypes.UUID,
    establishmentId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'EstablishmentSpecification',
  });
  return EstablishmentSpecification;
};