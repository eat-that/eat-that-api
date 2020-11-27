'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EstablishmentKitchens', {
      // id: {
      //   allowNull: false,
      //   defaultValue: Sequelize.UUIDV4,
      //   primaryKey: true,
      //   type: Sequelize.UUID
      // },
      kitchenId: {
        type: Sequelize.UUID,
        allowNull:false,
        references:{
          model:'Kitchens',
          key:'id'
        }
      },
      establishmentId: {
        type: Sequelize.UUID,
        allowNull:false,
        references:{
          model:'Establishments',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EstablishmentKitchens');
  }
};