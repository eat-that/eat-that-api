'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EstablishmentTypes', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      // typeId: {
      //   type: Sequelize.UUID,
      //   allowNull:false,
      //   references:{
      //     model:'Type',
      //     key:'id'
      //   }
      // },
      // establishmentId: {
      //   type: Sequelize.UUID,
      //   allowNull:false,
      //   references:{
      //     model:'Establishment',
      //     key:'id'
      //   }
      // },
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
    await queryInterface.dropTable('EstablishmentTypes');
  }
};