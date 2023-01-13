import Joi from 'joi';

export const productRequiredSchema = Joi.object({
  name: Joi.required(),
  amount: Joi.required(),
});

export const productSchema = Joi.object({
  name: Joi.string().min(3),
  amount: Joi.string().min(3),
});

export const userRequiredSchema = Joi.object({
  username: Joi.required(),
  vocation: Joi.required(),
  level: Joi.required(),
  password: Joi.required(),
});

export const userSchema = Joi.object({
  username: Joi.string().min(3),
  vocation: Joi.string().min(3),
  level: Joi.number().min(1),
  password: Joi.string().min(8),
});
