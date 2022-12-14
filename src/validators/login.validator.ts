const Joi = require('joi');

const accountSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).max(15).required(),
});
module.exports = accountSchema;