// Use .env
require('dotenv').config();

// Import modules
const twit = require('twit');
const bcrypt = require('bcrypt');
const fastify = require('fastify');
const mongoose = require('mongoose');

// Create app
const app = fastify();

// Register fastify modules
app.register(require('fastify-static'), {
    root: __dirname+"/views",
});
app.register(require('fastify-formbody'));
app.register(require('fastify-cookie'));
app.register(require('fastify-session'), {
    secret: process.env.SESSION_SECRET,
    cookie: {
        secure: false,
        hostOnly: false,
        sameSite: false,
    },
});

// Connect database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .catch(() => {
        throw new Error("Unable to connect to the database!")
    })
    .then(() => {
        console.log("Database successfully connected!")
    });

// Launch RestAPI routes
app.register(require("./api/routes"));

// Listen
app.listen(process.env.PORT, (error) => {
    if (error) throw error;
});