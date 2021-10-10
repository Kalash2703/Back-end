const {emailValidate,
passwordValidate } =require('../utils/validate');


const registerIntialCheck = (req,res,next) => {
    const {email,password,confirmPassword}=req.body;    
    if(typeof email === 'string' && 
    typeof password === 'string' && 
    typeof confirmPasword && 
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword === password
    emailValidate(email) &&
    passwordValidate(password)

    ) {
        next();
    } else {
        res.status(401).send("Initial checks fail");
    }
    
};

module.exports = registerIntialCheck;