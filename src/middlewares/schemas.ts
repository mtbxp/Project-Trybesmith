import Joi from 'joi';

export const checkInputsProducts = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
}).messages({
  'any.required': '{#label} is required',
  'string.base': '{#label} must be a string',
  'string.min': '{#label} length must be at least {#limit} characters long',
});

export const checkInputsUsers = Joi.object();