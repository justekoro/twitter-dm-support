const twit = require('twit');

module.exports = new twit({
    consumer_key: process.env.TW_CKEY,
    consumer_secret: process.env.TW_CSEC,
    access_token: process.env.TW_ATOKEN,
    access_token_secret: process.env.TW_ATOKEN_SECRET,
});