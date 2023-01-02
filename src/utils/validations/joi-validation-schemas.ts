import Joi from 'joi';

export const logUserSchema = Joi.object({
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

export const newProductSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .messages({
      'string.empty': '"name" is required',
      'any.required': '"name" is required',
    })
    .required(),
  amount: Joi.string()
    .messages({
      'string.empty': '"amount" is required',
      'any.required': '"amount" is required',
    })
    .required(),
});
