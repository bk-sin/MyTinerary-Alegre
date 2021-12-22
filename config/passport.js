const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt

const User = require("../models/User")

module.exports = passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    },
    (jwt_payload, done) => {
      User.findOne({_id: jwt_payload._doc._id})
        .then((user) => {
          if (user) {
            console.log("si")
            return done(null, user)
          } else {
            console.log("no")
            return done(null, false)
          }
        })
        .catch((err) => {
          console.log("no")
          console.error(err)
          return done(err, false)
        })
    }
  )
)
