import Joi from 'joi';

const productSchema = Joi.string().min(3).required();

const addProductSchema = Joi.object({
  name: productSchema.messages({
    'string.base': '422|"name" must be a string',
    'string.min': '422|"name" length must be at least 3 characters long',
  }),
  amount: productSchema.messages({
    'string.base': '422|"amount" must be a string',
    'string.min': '422|"amount" length must be at least 3 characters long',
  }),
});

export default addProductSchema;