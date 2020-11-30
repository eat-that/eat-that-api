'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Companion.belongsTo(models.Booking,{foreignKey:'bookingId'})
    }
  };
  Companion.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: require("sequelize").UUIDV4
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    bookingId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Companion',
  });
  return Companion;
};