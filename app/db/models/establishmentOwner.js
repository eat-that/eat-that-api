'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstablishmentOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EstablishmentOwner.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: require("sequelize").UUIDV4
    },
    establishmentId: DataTypes.UUID,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'EstablishmentOwner',
  });
  return EstablishmentOwner;
};