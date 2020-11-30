const models = require( '../../db/models');

function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await models.Establishment.findAll();
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function create(establishment) {
    return new Promise(async (resolve, reject) => {
        try {
            const newEstablishment = models.Establishment.build(establishment);
            const res = await newEstablishment.save();
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function update(establishmentId, establishment) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await models.Establishment.update(establishment, {
                where: {id: establishmentId},
                returning: true,
            });
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function deleteById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await models.Establishment.destroy({
                where: {id: id}
            });
            resolve(res)
        } catch (err) {
            reject(err);
        }
    });
}
module.exports = {
    getAll,
    create,
    update,
    deleteById
}