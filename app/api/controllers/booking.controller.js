const bookingService = require('../services/booking.service');

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingService.getAllBookings();
        res.status(200).send(bookings);
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
};

exports.createBooking = async (req,res) => {
    try {
        const newBooking = req.body;
        const booking = await bookingService.createBooking(newBooking);
        res.status(200).send(booking)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
};

exports.updateBooking = async (req,res) => {
    try {
        const newBooking = req.body;
        const id = newBooking.id
        const booking = await bookingService.updateBooking(id, newBooking);
        res.status(200).send(booking)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}

exports.deleteBooking = async (req,res) => {
    try {
        const id = req.params.id;
        const booking = await bookingService.deleteBooking(id);
        res.status(200).send(booking)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}