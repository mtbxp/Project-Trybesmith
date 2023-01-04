import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export default function validateProducts(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    amount: Joi.string().min(2).required(),
  }).required().messages({
    'any.required': '{#label} is required',
    'string.required': '{#label} must b a string',
    'string.min': '{#label} length must be at least 3 characters long',
  });

  const { error } = schema.validate(req.body);

  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    } 
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
}