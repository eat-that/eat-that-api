const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require('./app/db/models/index');
const routes = require('./app/modules/routes.modules');

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
db.sequelize
    .authenticate()
    .then(() =>
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        })
    ).catch(err => console.error('failed to connect to database', err))
