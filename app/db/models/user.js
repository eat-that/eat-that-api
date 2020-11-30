// import { v4 as uuidv4 } from 'uuid';
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.belongsToMany(models.User, {through: 'FavoriteEstablishment', foreignKey: 'userId', as: 'favorite'});
            User.hasMany(models.Booking, {as: 'bookings'})
        }
    };
    User.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: require("sequelize").UUIDV4
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        birthday: DataTypes.DATE,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });

    // User.beforeCreate((user,_) => {
    //     return user.id = uuidv4();
    // })
    return User;
};