const mongoose = require('mongoose');

const schem = mongoose.Schema({
    username: String,
    password: String,
    admin: Boolean,
    _id: mongoose.Schema.Types.ObjectID,
}, { collection: "users" });

module.exports = mongoose.model("users", schem);