const bookingBuilder = require('../builders/booking.builder');

function getAllBookings() {
    return new Promise(async (resolve, reject) => {
        try {
            const booking = await bookingBuilder.getAll();
            resolve(booking);
        } catch (err) {
            reject(err);
        }
    });
}

function createBooking(newBooking){
    return new Promise(async(resolve,reject) => {
        try {
            const booking = await bookingBuilder.create(newBooking);
            resolve(booking);
        } catch (err) {
            reject(err)
        }
    });
}

function updateBooking(bookingId, newBooking){
    return new Promise(async(resolve,reject) => {
        try {
            const booking = await bookingBuilder.update(bookingId,newBooking);
            resolve(booking);
        } catch (err) {
            reject(err)
        }
    });
}

function deleteBooking(bookingId){
    return new Promise(async(resolve,reject) => {
        try {
            const booking = await bookingBuilder.deleteById(bookingId);
            resolve(booking);
        } catch (err) {
            reject(err)
        }
    });
}

module.exports = {
    getAllBookings,
    deleteBooking,
    createBooking,
    updateBooking
}