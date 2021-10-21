const User =require("../models/mongo");
const {SECRET }=require("../config");
const { Strategy,ExtractJwt } = require("passport-jwt");


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrkey:SECRET

};

module.exports = passport => {
    passport.use(
        new Strategy(opts,async (payload,done) => {
            await User.findById(payload.uset_id)
                .then(user => {
                    if (user) {
                        return done(null,user);
                    }
                    return done(null,false);
                });
                .catch(err => {
                    return done(null,false);
                });
        })
    );
};