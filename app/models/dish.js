'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Dish.belongsTo(models.MenuCategory, {foreignKey:'menuCategoryId'})
    }
  };
  Dish.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    img: DataTypes.STRING,
    allergens: DataTypes.STRING,
    score: DataTypes.FLOAT,
    menuCategoryId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};