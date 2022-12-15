import Joi from 'joi';

const errorObject = {
  'string.empty': '{#label} cannot be an empty field',
  'string.base': '{#label} must be a string',
  'number.base': '{#label} must be a number',
  'number.min': '{#label} must be greater than or equal to {#limit}',
  'any.required': '{#label} is required',
  'string.min': '{#label} length must be at least {#limit} characters long',
};

export const loginRequestSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': '{#label} cannot be an empty field',
  'any.required': '{#label} is required',
});

export const createUserSchema = Joi.object({
  username: Joi.string().required().min(3),
  vocation: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8),
}).required().messages(errorObject);

export const createProductSchema = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
}).required().messages(errorObject);