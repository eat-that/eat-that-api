const establishmentService = require('../services/establishment.service');

exports.getAllEstablishments = async (req, res) => {
    try {
        const establishments = await establishmentService.getAllEstablishment();
        res.status(200).send(establishments);
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
};

exports.createEstablishment = async (req,res) => {
    try {
        const newEstablishment = req.body;
        const establishment = await establishmentService.createEstablishment(newEstablishment);
        res.status(200).send(establishment)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
};

exports.updateEstablishment = async (req,res) => {
    try {
        const newEstablishment = req.body;
        const id = newEstablishment.id
        const establishment = await establishmentService.updateEstablishment(id,newEstablishment);
        res.status(200).send(establishment)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}

exports.deleteEstablishment = async (req,res) => {
    try {
        const id = req.params.id;
        const establishment = await establishmentService.deleteEstablishment(id);
        res.status(200).send(establishment)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}