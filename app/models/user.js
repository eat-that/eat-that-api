'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.User, {through : 'FavoriteEstablishment', foreignKey:'userId', as:'favorite'}),
      User.hasMany(models.Booking,{as:'bookings'})
    }
  };
  User.init({
    id: DataTypes.UUID,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    adddress: DataTypes.STRING,
    phone: DataTypes.STRING,
    roleId:DataTypes.UUID
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};