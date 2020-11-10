'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MenuCategory.belongsTo(models.Menu,{foreignKey:'menuId'})
      MenuCategory.hasMany(models.Dish, {as:'dishs'})
    }
  };
  MenuCategory.init({
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    menuId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'MenuCategory',
  });
  return MenuCategory;
};