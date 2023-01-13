import Joi from 'joi';

export const productRequiredSchema = Joi.object({
  name: Joi.required(),
  amount: Joi.required(),
});

export const productSchema = Joi.object({
  name: Joi.string().min(3),
  amount: Joi.string().min(3),
});
