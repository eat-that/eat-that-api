'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kitchen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Kitchen.belongsToMany(models.Establishment, {through:'EstablishmentKitchen', foreignKey:'kitchenId', as :'establishment'})
    }
  };
  Kitchen.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: require("sequelize").UUIDV4
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kitchen',
  });
  return Kitchen;
};