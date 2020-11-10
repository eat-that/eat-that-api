'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteEstablishment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // FavoriteEstablishment.belongsTo(models.User, {foreignKey:'userId'})
      // FavoriteEstablishment.belongsTo(models.Establishment, {foreignKey:'establishmentId'})
    }
  };
  FavoriteEstablishment.init({
    userId: DataTypes.UUID,
    establishmentId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'FavoriteEstablishment',
  });
  return FavoriteEstablishment;
};