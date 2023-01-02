import Joi from 'joi';

const usernameValid = '"username" is required';
const passwordValid = '"password" is required';

export const logUserSchema = Joi.object({
  username: Joi.string()
    .messages({
      'string.empty': usernameValid,
      'any.required': usernameValid,
    })
    .required(),
  password: Joi.string()
    .messages({
      'string.empty': passwordValid,
      'any.required': passwordValid,
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
    .min(3)
    .messages({
      'string.empty': '"amount" is required',
      'any.required': '"amount" is required',
    })
    .required(),
});

export const newUserSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .messages({
      'string.empty': usernameValid,
      'any.required': usernameValid,
    })
    .required(),
  vocation: Joi.string()
    .min(3)
    .messages({
      'string.empty': '"vocation" is required',
      'any.required': '"vocation" is required',
    })
    .required(),
  password: Joi.string()
    .min(8)
    .messages({
      'string.empty': passwordValid,
      'any.required': passwordValid,
    })
    .required(),
  level: Joi.number()
    .min(1)
    .messages({
      'number.empty': '"level" is required',
      'any.required': '"level" is required',
    })
    .required(),
});
