import Joi from 'joi';

export const productValidation = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
}).messages({
  'any.required': '{#label} is required',
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least {#limit} characters long',
});

export const userValidation = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
}).messages({
  'any.required': '{#label} is required',
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least {#limit} characters long',
});