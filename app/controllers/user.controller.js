const userService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).send(users);
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
};
