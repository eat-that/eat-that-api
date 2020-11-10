'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Infrastructure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Infrastructure.belongsToMany(models.Establishment, {through:'EstablishmentInfrastructure', foreignKey:'infrastructureId', as :'establishment'})
    }
  };
  Infrastructure.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Infrastructure',
  });
  return Infrastructure;
};