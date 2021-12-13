const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authControllers = {
  signupUser: async (req, res) => {
    const {name, lastname, photo, email, password, country} = req.body

    if (password === "") {
      password = null
    }

    try {
      const userExists = await User.findOne({email})
      if (userExists) {
        res.json({success: false, errors: "The email is already registered"})
      } else {
        const passwordHashed = bcryptjs.hashSync(password, 10)
        const newUser = new User({
          name,
          lastname,
          photo,
          email,
          password: passwordHashed,
          country,
        })
        await newUser.save()

        res.json({success: true, response: newUser, error: null})
      }
    } catch (error) {
      res.json({success: false, response: null, error: error})
    }
  },

  signinUser: async (req, res) => {
    const {email, password} = req.body
    try {
      const user = await User.findOne({email})

      if (user) {
        const passwordIsOk = bcryptjs.compareSync(password, user.password)
        if (passwordIsOk) {
          const token = jwt.sign({...user}, process.env.SECRET_KEY)
          console.log(req.user)
          res.json({
            success: true,
            response: [
              {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                country: user.country,
                photo: user.photo,
                token: token,
              },
            ],
            error: null,
          })
        } else {
          res.json({
            success: false,
            response: null,
            error: "Password is incorrect!",
          })
        }
      } else {
        res.json({
          success: false,
          response: null,
          error: "Email doesnt exist!",
        })
      }
    } catch (error) {
      res.json({
        success: false,
        response: null,
        error: error,
      })
    }
  },

  readUsers: (req, res) => {
    User.find().then((response) => {
      res.json({response})
    })
  },

  readUser: (req, res) => {
    City.findOne({
      $or: [{email: req.body.email}, {phone: req.body.phone}],
    }).then((response) => {
      res.json({response})
    })
  },
  token: (req, res) => {
    res.json(req.user)
  },
}

module.exports = authControllers
