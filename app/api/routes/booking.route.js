const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

router.get('/', bookingController.getAllBookings);
router.post('/', bookingController.createBooking);
router.put('/', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;