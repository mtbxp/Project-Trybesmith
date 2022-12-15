import joi from 'joi';
import { TProduct } from '../../types';

const productSchema = joi.object({
  name: joi.string().min(2).required().messages({
    'string.base': '"name" must be a string',
    'string.empty': '"name" is required',
    'string.min': '"name" length must be at least 3 characters long',
  }),
  amount: joi.string().min(2).required().messages({
    'string.base': '"amount" must be a string',
    'string.empty': '"amount" is required',
    'string.min': '"amount" length must be at least 3 characters long',
  }),
});

const validateProducts = (product:TProduct) => {
  const { error } = productSchema.validate(product);
  if (error) return error.details[0].message;
};

export default validateProducts;