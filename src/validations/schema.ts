import Joi from 'joi';

const productSchema = Joi.string().min(3).required();
const userSchema = Joi.string().required();
const orderSchema = Joi.array().items(Joi.number().required()).required();

export const addProductSchema = Joi.object({
  name: productSchema.messages({
    'string.base': '422|"name" must be a string',
    'string.min': '422|"name" length must be at least 3 characters long',
  }),
  amount: productSchema.messages({
    'string.base': '422|"amount" must be a string',
    'string.min': '422|"amount" length must be at least 3 characters long',
  }),
});

export const addUserSchema = Joi.object({
  username: userSchema.min(3).messages({
    'string.base': '422|"username" must be a string',
    'string.min': '422|"username" length must be at least 3 characters long',
  }),
  vocation: userSchema.min(3).messages({
    'string.base': '422|"vocation" must be a string',
    'string.min': '422|"vocation" length must be at least 3 characters long',
  }),
  level: Joi.number().greater(0).required().messages({
    'number.base': '422|"level" must be a number',
    'number.greater': '422|"level" must be greater than or equal to 1',
  }),
  password: userSchema.min(8).messages({
    'string.base': '422|"password" must be a string',
    'string.min': '422|"password" length must be at least 8 characters long',
  }),
});

export const addOrderSchema = Joi.object({
  productsIds: orderSchema.messages({
    'array.base': '422|"productsIds" must be an array',
    'array.includesRequiredUnknowns': '422|"productsIds" must include only numbers',
  }),
});

// Fonte: https://joi.dev/api/?v=17.7.0