const check = (req, res, next) => {

    if (req.session.User.role === "Super-admin") {
        res.status(200).send('success');
    } else {
        res.status(401).send("Needs to be Super Admin")
    }
};

module.exports = check;