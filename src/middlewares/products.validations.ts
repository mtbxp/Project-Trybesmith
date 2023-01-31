import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import statuses from '../utils/statuses';

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

const validateProducts = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    if (error.details[0].type !== 'any.required') {
      return res.status(statuses.MISSING_REQUIREMENT).json({ message: error.message });
    }
    return res.status(statuses.MISSING_FIELDS).json({ message: error.message });
  }

  next();
};

export default validateProducts;
