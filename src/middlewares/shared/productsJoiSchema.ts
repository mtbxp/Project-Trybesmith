import Joi from 'joi';
import IProduct from '../../Interfaces/products.Interface';

export default function productSchema(): Joi.ObjectSchema<IProduct> {
  return Joi.object({
    name: Joi.string().min(2).required(),
    amount: Joi.string().min(2).required(),
  }).required().messages({
    'any.required': '{#label} is required',
    'string.required': '{#label} must b a string',
    'string.min': '{#label} length must be at least 3 characters long',
  });   
}
