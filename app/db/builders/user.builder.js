const models = require( '../models/index');
const bcrypt = require('bcrypt');

function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await models.User.findAll({attributes: {exclude: ['password']}});
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function getByEmail(userEmail) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await models.User.findOne({
                where: {email: userEmail},
                attributes: {exclude: ['password']}
            });
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
            const newUser = models.User.build(user);
            const res = await newUser.save()
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

            const res = await models.User.update(user, {
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
    getByEmail,
    create,
    update,
    deleteById
}