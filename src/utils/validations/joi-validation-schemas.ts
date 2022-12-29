import Joi from 'joi';

const logUserSchema = Joi.object({
  username: Joi.string()
    .messages({
      'string.empty': '"username" is required',
      'any.required': '"username" is required',
    })
    .required(),
  password: Joi.string()
    .messages({
      'string.empty': '"password" is required',
      'any.required': '"password" is required',
    })
    .required(),
});

export default logUserSchema;