'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.Establishment);
      Booking.belongsTo(models.User);
    }
  };
  Booking.init({
    userId: {
      type:DataTypes.UUID,
      allowNull:false,
      references : {
        model:'Users',
        key:'id'
      }
    },
    establishmentId: {
      type : DataTypes.UUID,
      allowNull:false,
      references : {
        model:'Establishments',
        key:'id'
      }
    },
    state: DataTypes.STRING,
    number: DataTypes.INTEGER,
    detail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};