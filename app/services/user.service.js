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

function getByEmail(email){
    return new Promise(async(resolve,reject) => {
        try {
            const user = await userBuilder.getByEmail(email);
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

function updateUser(userId,newUser){
    return new Promise(async(resolve,reject) => {
        try {
            const user = await userBuilder.update(userId,newUser);
            resolve(user);
        } catch (err) {
            reject(err)
        }
    });
}

function deleteUser(userId){
    return new Promise(async(resolve,reject) => {
        try {
            const user = await userBuilder.deleteById(userId);
            resolve(user);
        } catch (err) {
            reject(err)
        }
    });
}

module.exports = {
    getAll,
    getByEmail,
    createUser,
    updateUser,
    deleteUser
}