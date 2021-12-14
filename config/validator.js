const joi = require("joi")

const validator = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().max(30).min(3).required(),
    lastname: joi.string().max(30).min(3).required(),
    email: joi.string().max(30).min(10).trim().required().messages({
      "string.empty": "This field is required",
      "string.min": "This field need at least 3 characters",
    }),
    password: joi.string().required().trim().min(8).max(40).messages({
      "string.empty": "The password is required",
      "string.min": "The password needs more than 8 characters",
    }),
    photo: joi.string().max(300).min(3).required(),
    country: joi.string().max(30).min(3).required(),
    google: joi.boolean(),
  })

  const validation = schema.validate(req.body, {abortEarly: false})

  if (validation.error) {
    res.json({success: false, response: validation.error.details})
  } else {
    next()
  }
}

module.exports = validator
