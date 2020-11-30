const models = require( '../../db/models');

function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await models.Booking.findAll();
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function create(user) {
    return new Promise(async (resolve, reject) => {
        try {
            const newBooking = models.Booking.build(user);
            const res = await newBooking.save()
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function update(bookingId, booking) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await models.Booking.update(booking, {
                where: {id: bookingId},
                returning: true,
            });
            resolve(res);
        } catch (err) {
            reject(err);
        }
    });
}

function deleteById(bookingId) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await models.Booking.destroy({
                where: {id: bookingId}
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