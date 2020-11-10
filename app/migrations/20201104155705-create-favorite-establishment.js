'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FavoriteEstablishments', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      // userId: {
      //   type: Sequelize.UUID,
      //   allowNull:false,
      //   references:{
      //     model:'User',
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
    await queryInterface.dropTable('FavoriteEstablishments');
  }
};