const establishmentBuilder = require('../builders/establishment.builder');

function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const establishment = await establishmentBuilder.getAll();
            resolve(establishment);
        } catch (err) {
            reject(err);
        }
    });
}

function createEstablishment(newEstablishment){
    return new Promise(async(resolve,reject) => {
        try {
            const establishment = await establishmentBuilder.create(newEstablishment);
            resolve(establishment);
        } catch (err) {
            reject(err)
        }
    });
}

function updateEstablishment(establishmentId,newEstablishment){
    return new Promise(async(resolve,reject) => {
        try {
            const establishment = await establishmentBuilder.update(establishmentId,newEstablishment);
            resolve(establishment);
        } catch (err) {
            reject(err)
        }
    });
}

function deleteEstablishment(establishmentId){
    return new Promise(async(resolve,reject) => {
        try {
            const establishment = await establishmentBuilder.deleteById(establishmentId);
            resolve(establishment);
        } catch (err) {
            reject(err)
        }
    });
}

module.exports = {
    getAll,
    deleteEstablishment,
    createEstablishment,
    updateEstablishment
}