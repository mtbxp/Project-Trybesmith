import Joi from 'joi';

const required = '{#label} is required';
const typeString = '{#label} must be a string';
const typeNumber = '{#label} must be a number';
const stringLength = '{#label} length must be at least {#limit} characters long';
const minNumber = '{#label} must be greater than or equal to {#limit}';

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'any.required': required,
});

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
}).required().messages({
  'any.required': required,
  'string.base': typeString,
  'string.min': stringLength,
});

export const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
}).required().messages({
  'any.required': required,
  'string.base': typeString,
  'string.min': stringLength,
  'number.base': typeNumber,
  'number.min': minNumber,
});
