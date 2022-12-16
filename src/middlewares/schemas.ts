import Joi from 'joi';

const required = '{#label} is required';

export const productValidation = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
}).messages({
  'any.required': required,
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least {#limit} characters long',
});

export const userValidation = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
}).messages({
  'any.required': required,
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least {#limit} characters long',
});

export const orderValidation = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required(),
}).messages({
  'any.required': required,
  'array.base': '{#label} must be an array',
  'array.min': '{#label} must include only numbers',
});