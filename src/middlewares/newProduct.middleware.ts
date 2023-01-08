import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { status } from '../utils/status';

const newProduct = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string.base': '"name" must be a string',
    'any.required': '"name" is required',
    'string.empty': '"name" cannot be empty',
    'string.min': '"name" length must be at least 3 characters long',
  }),
  amount: Joi.string().required().min(3).messages({
    'string.base': '"amount" must be a string',
    'any.required': '"amount" is required',
    'string.empty': '"amount" cannot be empty',
    'string.min': '"amount" length must be at least 3 characters long',
  }),
});

const validateNewProduct = (req: Request, res: Response, next: NextFunction) => {
  const validation = newProduct.validate(req.body);
  const { error } = validation;

  if (error) {
    const [message] = error.details.map((x) => x.message);
    if (message === '"amount" is required'
     || message === '"name" is required') {
      return res.status(status.INFO_IS_REQUIRED).json({ message });
    } 
    return res.status(status.TYPE_ERROR).json({ message });
  }
  return next();
};
  
export default validateNewProduct;