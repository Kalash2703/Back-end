const saltRounds=10;

const User = require('../models/mongo');
const bcrypt = require("bcrypt");
const register= async (req,res) => {
    const { email,password}=req.body;
    try {
        const alreadyExists=await User.findOne({ where: {email}});
        if(alreadyExists) {
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({email: email.toLowerCase(),password: hash, fullName: "Kalash"})
        const saveUser = await newUser.save();
        res.status(201).send("User registered!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong")
    } 
}

const register-s-adminuper= async (req,res) => {
    const { email,password}=req.body;
    try {
        const alreadyExists=await User.findOne({ where: {email}});
        if(alreadyExists) {
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({email: email.toLowerCase(),password: hash, fullName: "Kalash",role:"Super-admin"})
        const saveUser = await newUser.save();
        req.session.User = savedUser;
        res.status(201).send("User registered!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong")
    } 
}

module.exports = {register,registerSuperAdmin};