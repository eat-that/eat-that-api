const userBuilder = require('../db/builders/user.builder');
// const bcrypt = require('bcrypt');

function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await userBuilder.getAll();
            resolve(user);
        } catch (err) {
            reject(err);
        }
    });
}

function getByLogin(login){
    return new Promise(async(resolve,reject) => {
        try {
            const user = await userBuilder.getByLogin(login);
            resolve(user);
        } catch (err) {
            reject(err)
        }
    });
}

function createUser(newUser){
    return new Promise(async(resolve,reject) => {
        try {
            const user = await userBuilder.create(newUser);
            resolve(user);
        } catch (err) {
            reject(err)
        }
    });
}

module.exports = {
    getAll,
    getByLogin,
    createUser
}