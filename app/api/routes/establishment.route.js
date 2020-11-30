const express = require('express');
const router = express.Router();
const establishmentController = require('../controllers/establishment.controller');

router.get('/', establishmentController.getAllEstablishments);
router.post('/',establishmentController.createEstablishment);
router.put('/',establishmentController.updateEstablishment);
router.delete('/:id',establishmentController.deleteEstablishment);

module.exports = router;