const User = require('../models/user');

const bcrypt = require('bcrypt');

function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await User.findAll({attributes: {exclude: ['password']}});
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function getById(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            // pourquoi le exclude marche pas ?
            const res = await User.findByPk(userId, { attributes: { exclude: ['password'] } } );
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });

}

function create(user) {
    return new Promise(async (resolve, reject) => {
        try {
            user.password = bcrypt.hashSync(user.password, 10)

            const res = await User.create(user);
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function update(userId, user) {
    return new Promise(async (resolve, reject) => {
        try {
            if (user.password) {
                user.password = bcrypt.hashSync(user.password, 10)
            }

            const res = await User.update(user, {
                where: {id: userId},
                returning: true,
            });
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function deleteById(userId) {
    return new Promise(async (resolve, reject) => {
        try {
            await User.destroy({
                where: {id: userId}
            });
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}