const userService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).send(users);
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
};

exports.getUserByEmail = async (req,res) => {
    try {
        const email = req.params.email;
        const user = await userService.getByEmail(email);
        res.status(200).send(user)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}

exports.createUser = async (req,res) => {
    try {
        const newUser = req.body;
        const user = await userService.createUser(newUser);
        res.status(200).send(user)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
};

exports.updateUser = async (req,res) => {
    try {
        const newUser = req.body;
        const userId = newUser.id
        const user = await userService.updateUser(userId,newUser);
        res.status(200).send(user)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const userId = req.params.id;
        const user = await userService.deleteUser(userId);
        res.status(200).send(user)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}
