const umodel = require('../../db/models/users');

module.exports = (req, res) => {
    console.log(req.session.username);
    if (!req.session || !req.session.username) {
        res.redirect("/login?message=You%20must%20login%20to%20access%20the%20main%20page.");
        return;
    }
    umodel.findOne({ username: req.session.username }).then(result => {
        if (!result) {
            res.redirect("/login?message=Invalid%20session");
            return;
        }
        res.sendFile("index.html");
    })
        .catch(error => {
            console.error(error);
            res.send("Internal Server Error");
        });
}