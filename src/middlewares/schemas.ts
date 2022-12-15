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