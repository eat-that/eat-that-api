'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Establishment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Establishment.belongsToMany(Kitchen, {through : 'EstablishmentKitchen', foreignKey:'establishmentId', as:'kitchen'})
      Establishment.belongsToMany(models.Infrastructure, {through : 'EstablishmentInfrastructure', foreignKey:'establishmentId', as:'infrastructure'})
      Establishment.belongsToMany(models.Specification, {through : 'EstablishmentSpecification', foreignKey:'establishmentId', as:'specification'})
      Establishment.belongsToMany(models.Type, {through : 'EstablishmentType', foreignKey:'establishmentId', as:'type'})
      Establishment.belongsToMany(models.User, {through : 'FavoriteEstablishment', foreignKey:'establishmentId', as:'userFav'})
      Establishment.hasMany(models.Booking,{foreignKey:'establishmentId',sourceKey:'id',as:'bookings'})
    }
  };
  Establishment.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    serviceScore: DataTypes.FLOAT,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    img: DataTypes.STRING,
    sponsored: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Establishment',
  });
  return Establishment;
};