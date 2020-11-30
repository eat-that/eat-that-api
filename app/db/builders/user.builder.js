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

function getByLogin(userLogin) {
    return new Promise(async (resolve, reject) => {
        try {
            // pourquoi le exclude marche pas ?
            const res = await User.findOne({
                where: {login: userLogin},
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
            // console.log(user)
            const newUser = models.User.build(user);
            console.log({newUser})
            const res = await newUser.save()
            // const res = await User.create(user);
            console.log({res})
            resolve(res);
        } catch (err) {
            console.log({err})
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
    getByLogin,
    create,
    update,
    deleteById
}