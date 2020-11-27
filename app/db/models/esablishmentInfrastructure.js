'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EsablishmentInfrastructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EsablishmentInfrastructure.belongsTo(models.Establishment, {foreignKey: 'establishmentId'})
      EsablishmentInfrastructure.belongsTo(models.Infrastructure, {foreignKey: 'infrastructureId'})
    }
  };
  EsablishmentInfrastructure.init({
    infrastructureId: DataTypes.UUID,
    establishmentId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'EsablishmentInfrastructure',
  });
  return EsablishmentInfrastructure;
};