'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menu.belongsTo(models.Establishment,{foreignKey:'establishmentId'})
      Menu.hasMany(models.MenuCategory,{as:'categories'})
    }
  };
  Menu.init({
    name: DataTypes.STRING,
    establishmentId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};