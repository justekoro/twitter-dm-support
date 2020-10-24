const
    bcrypt = require('bcrypt'),
    umodel = require('../../db/models/users');

module.exports = (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    if (!username || !password) {
        let url = "/login?message=Some%20fields%20are%20missing";
        if (username) url+=`&prefill=${username}`;
        res.redirect(url);
        return;
    }
    umodel.findOne({ username }).then(result => {
        if (!result) {
            res.redirect("/login?message=The%20user%20"+username+"%20does%20not%20exist")
        }
    })
    .catch((e) => {
        res.redirect("/login?message=An%20internal%20error%20occured,%20please%20retry");
    });
}