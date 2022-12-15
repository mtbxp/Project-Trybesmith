import Joi from 'joi';

const usernameSchema = Joi.string().min(3).required().messages({
  'any.required': '"username" is required',
  'string.base': '"username" must be a string',
  'string.min': '"username" length must be at least 3 characters long',
});

const passwordSchema = Joi.string().min(8).required().messages({
  'any.required': '"password" is required',
  'string.base': '"password" must be a string',
  'string.min': '"password" length must be at least 8 characters long',
});

const vocationSchema = Joi.string().min(3).required().messages({
  'any.required': '"vocation" is required',
  'string.base': '"vocation" must be a string',
  'string.min': '"vocation" length must be at least 3 characters long',
});

const levelSchema = Joi.number().min(1).required().messages({
  'any.required': '"level" is required',
  'number.base': '"level" must be a number',
  'number.min': '"level" must be greater than or equal to 1',
});

const loginSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
  vocation: vocationSchema,
  level: levelSchema,
});

const nameSchema = Joi.string().min(3).required().messages({
  'any.required': '"name" is required',
  'string.base': '"name" must be a string',
  'string.min': '"name" length must be at least 3 characters long',
});

const amountSchema = Joi.string().min(3).required().messages({
  'any.required': '"amount" is required',
  'string.base': '"amount" must be a string',
  'string.min': '"amount" length must be at least 3 characters long',
});

const productSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});

const orderSchema = Joi.array().items().min(1).required()
  .messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
  });

export {
  usernameSchema,
  passwordSchema,
  vocationSchema,
  levelSchema,
  loginSchema,
  productSchema,
  orderSchema,
};