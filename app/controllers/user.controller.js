const userService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).send(users);
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
};

exports.getUserByLogin = async (req,res) => {
    try {
        const {login} = req.body;
        const user = await userService.getByLogin(login);
        res.status(200).send(user)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}

exports.createUser = async (req,res) => {
    try {
        const newUser = req.body;
        // console.log(newUser)
        const user = await userService.createUser(newUser);
        res.status(200).send(user)
    } catch (err) {
        res.status(err.status || 500).send({ message: err.message || 'Internal Server Error' });
    }
}
