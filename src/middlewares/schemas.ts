import Joi from 'joi';

export const checkInputsLogin = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '{#label} is required',
});

export const checkInputsProduct = Joi.object({
  name: Joi.string().required(), 
  amount: Joi.string().required(),
}).messages({
  'any.required': '{#label} is required',
});
