
// Importing the express
const express = require('express');

// Creating the express app
const app = express();

// Importing the MURL
require('dotenv').config();

// Importing the mongoose
const mongoose = require('mongoose');


// Importing the body-parser
const bodyParser = require('body-parser');

// Importing the postsRoute
const postsRoute = require('./routes/posts');

// bodyParser middleware
app.use(bodyParser.json());

// Using the postsRoute middleware
app.use('/posts', postsRoute);

// Homepage route
app.get('/', (req, res) => {
    res.send('Homepage');
});

// Mongoose connection to MongoDB
mongoose.connect(process.env.DB_CONNECTOR)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });


// Server listening
app.listen(3000, () => {
    console.log('server is up and running');
});

