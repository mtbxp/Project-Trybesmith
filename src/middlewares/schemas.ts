import Joi from 'joi';

const isRequired = '{#label} is required';

export const checkInputsProducts = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
}).messages({
  'any.required': isRequired,
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least {#limit} characters long',
});

export const checkInputsUsers = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
}).messages({
  'any.required': isRequired,
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'number.base': '{#label} must be a number',
  'number.min': '{#label} must be greater than or equal to {#limit}',
});

export const checkInputsOrders = Joi.object({
  productsIds: Joi.array().min(1).required(),
}).messages({
  'any.required': isRequired,
  'array.base': '{#label} must be an array',
  'array.min': '{#label} must include only numbers',
});