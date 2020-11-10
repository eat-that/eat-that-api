'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EstablishmentOwners', {
      userId: {
        type: Sequelize.UUID,
        allowNull:false,
        references:{
          model:'Users',
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
    await queryInterface.dropTable('EstablishmentOwners');
  }
};