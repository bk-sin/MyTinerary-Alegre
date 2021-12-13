const joi = require("joi")

const validator = (req, res, next) => {
  const schema = joi.object({
    name: joi.string(),
    lastname: joi.string(),
    email: joi.string().max(30).min(10).trim().required().messages({
      "string.empty": "This field is required",
      "string.min": "This field need at least 3 characters",
    }),
    password: joi.string().required().trim().min(8).max(20).messages({
      "string.empty": "The password is required",
      "string.min": "The password needs more than 8 characters",
    }),
    photo: joi.string(),
    country: joi.string(),
  })

  const validation = schema.validate(req.body, {abortEarly: false})

  if (validation.error) {
    res.json({success: false, response: validation.error.details})
  } else {
    next()
  }
}

module.exports = validator
