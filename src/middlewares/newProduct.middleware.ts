import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { status } from '../utils/status';

const newProduct = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string.base': '{#label} must be a string',
    'any.required': '{#label} is required',
    'string.empty': '{#label} cannot be empty',
    'string.min': '{#label} length must be at least 3 characters long',
  }),
  amount: Joi.string().required().min(3).messages({
    'string.base': '{#label} must be a string',
    'any.required': '{#label} is required',
    'string.empty': '{#label} cannot be empty',
    'string.min': '{#label} length must be at least 3 characters long',
  }),
});

const validateNewProduct = (req: Request, res: Response, next: NextFunction) => {
  const validation = newProduct.validate(req.body);
  const { error } = validation;

  if (error) {
    const [message] = error.details.map((x) => x.message);
    if (message.includes('is required')) {
      return res.status(status.INFO_IS_REQUIRED).json({ message });
    } 
    return res.status(status.TYPE_ERROR).json({ message });
  }
  return next();
};
  
export default validateNewProduct;