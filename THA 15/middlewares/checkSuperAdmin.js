const check=(req,res,next) => {

    if(req.session.User.role === "Super-admin") {
        res.status(200).send('sucess');
    } else {
        res.status(401).send("Needs to be super admin")
    }
}