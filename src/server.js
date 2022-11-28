const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const port = 5050;
const url = "mongodb+srv://azippy:zippy@cluster1.d9zti2c.mongodb.net/EMS";

// imports
const router = require('./Routes/routes') //importing the routes file

// middleware
app.use(express.json())
app.use('/', router)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// testing the server
app.get('/', (req, res) => {
    res.send("On Home!!");
})

// connecting to the database
mongoose.connect(url, () => {
    // listening to the port
    app.listen(port, (req, res) => {
        console.log(`Server started at port: ${port}`);
    });
}).then(() => console.log('Connected to db'))
    .catch(error => console.log(error))
