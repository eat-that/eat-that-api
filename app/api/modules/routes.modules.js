const userRoutes = require('../routes/user.route');
const establishmentRoutes = require('../routes/establishment.route');
const express = require('express');
const router = express.Router();

router.use('/users', userRoutes);
router.use('/establishments', establishmentRoutes);


module.exports = router;
