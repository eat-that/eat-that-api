const userRoutes = require('../routes/user.route');

exports.init = function (app) {

    app.use(process.env.API_BASE_URL + '/users', userRoutes);
}
