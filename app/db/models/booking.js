'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Booking.belongsTo(models.User, {foreignKey: 'userId'});
            Booking.belongsTo(models.Establishment, {foreignKey: 'establishmentId'})
        }
    };
    Booking.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: require("sequelize").UUIDV4
        },
        userId: DataTypes.UUID,
        establishmentId: DataTypes.UUID,
        state: DataTypes.STRING,
        number: DataTypes.INTEGER,
        detail: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};