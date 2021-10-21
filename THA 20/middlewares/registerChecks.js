/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @description
 * email validate -string
 * password validation 
 * password == confirm password
 */
 const { emailValidate, passwordValidate } = require('../utils/validate')
 const registerInitialChecks = (req, res, next) => {
 
     const { email, password, confirmPassword } = req.body;
     if (typeof email === "string" && typeof password === "string" && typeof confirmPassword === "string" &&
         email.length > 0 && password.length > 8 &&
         confirmPassword === password &&
         emailValidate(email) && passwordValidate(password)
     ) { next(); } else {
         req.status(401).send("Initial Check Failed");
     }
 
 };
 
 module.exports = registerInitialChecks;