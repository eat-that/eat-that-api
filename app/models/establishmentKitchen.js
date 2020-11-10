'use strict';
module.exports = (sequelize, DataTypes) => {
  const EstablishmentKitchen = sequelize.define('EstablishmentKitchen', {
    kitchenId: {
      type: DataTypes.UUID,
      allowNull: false,
      references:{
        model:'Kitchen',
        key:'id'
      }
    },
    establishmentId: {
      type: DataTypes.UUID,
      allowNull: false,
      references:{
        model:'Establishment',
        key:'id'
      }
    },
  }, {timestamp: false});
  // EstablishmentKitchen.associate = function (models) {
  //   EstablishmentKitchen.belongsTo(models.Establishment, {
  //     as:'establishment',
  //     foreignKey: 'establishmentId',
  //   })
  //   EstablishmentKitchen.belongsTo(models.Kitchen, {
  //     as:'kitchen',
  //     foreignKey: 'kitchenId'
  //   })
  // };
  return EstablishmentKitchen;
}
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       EstablishmentKitchen.belongsTo(models.Establishment, { foreignKey : 'establishmentId'})
//       EstablishmentKitchen.belongsTo(models.Kitchen, { foreignKey : 'kitchenId'})
//
//     }
//   };
//   EstablishmentKitchen.init({
//     kitchenId: DataTypes.UUID,
//     establishmentId: DataTypes.UUID
//   }, {
//     sequelize,
//     modelName: 'EstablishmentKitchen',
//   });
//   return EstablishmentKitchen;
// };