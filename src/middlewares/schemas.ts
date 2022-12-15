import Joi from 'joi';

export const loginRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': '{#label} cannot be an empty field',
  'any.required': '{#label} is required',
});

export const createUserSchema = Joi.object({
  username: Joi.string().required(),
  vocation: Joi.string().required(),
  level: Joi.number().required(),
  password: Joi.string().required(),
});

export const createProductSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
}).required().messages({
  'string.empty': '{#label} cannot be an empty field',
  'string.base': '{#label} must be a string',
  'any.required': '{#label} is required',
  'string.min': '{#label} length must be at least 3 characters long',
});