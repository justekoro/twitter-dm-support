const umodel = require('../../db/models/users');

module.exports = (req, res) => {
    if (!req.session || !req.session.username) {
        res.redirect("/login");
        return;
    }
    umodel.findOne({ username: req.session.username }).then(result => {
        if (!result) {
            res.redirect("/login");
            return;
        }
        res.sendFile("index.html");
    })
        .catch(error => {
            console.error(error);
            res.send("Internal Server Error");
        });
}