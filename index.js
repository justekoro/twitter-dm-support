// Use .env
require('dotenv').config();

// Import modules
const twit = require('twit');
const bcrypt = require('bcrypt');
const fastify = require('fastify');
const mongoose = require('mongoose');

// Create app
const app = fastify();

// Launch RestAPI routes
app.register(require("./api/routes"));

// Register fastify modules
app.register(require('fastify-static'), {
    root: __dirname+"/views",
});

// Connect database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .catch(error => {
        throw new Error("Unable to connect to the database!\n", error)
    })
    .then(() => {
        console.log("Database successfully connected!")
    });

// Listen
app.listen(process.env.PORT, (error) => {
    if (error) throw error;
});