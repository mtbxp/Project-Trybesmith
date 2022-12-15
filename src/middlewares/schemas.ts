import Joi from 'joi';

const anyRequiredError = '{#label} is required';
const stringBaseError = '{#label} must be a string';
const stringMinError = '{#label} length must be at least {#limit} characters long';
const numberMinError = '{#label} must be greater than or equal to {#limit}';
const numberBaseError = '{#label} must be a number';

export const checkInputsLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': anyRequiredError,
});

export const checkInputsProduct = Joi.object({
  name: Joi.string().min(3).required(), 
  amount: Joi.string().min(3).required(),
}).messages({
  'any.required': anyRequiredError,
  'string.base': stringBaseError,
  'string.min': stringMinError,
});

export const checkInputsUser = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
}).messages({
  'any.required': anyRequiredError,
  'string.base': stringBaseError,
  'string.min': stringMinError,
  'number.min': numberMinError,
  'number.base': numberBaseError,
});
