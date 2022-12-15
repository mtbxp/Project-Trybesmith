import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validator = Joi.object({
  name: Joi.string().min(3).required().label('name'),
  amount: Joi.string().min(3).required().label('amount'),
});

const checkValidator = (body: { name: string, amount: string }) => {
  const { error } = validator.validate(body);
  
  return { type: error?.details[0].type,
    message: error?.details[0].message };
};

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { type, message } = checkValidator(body);
  if (type === 'any.required') {
    return res.status(400).json({ message });
  }
  if (type === 'string.min') {
    return res.status(422).json({ message });
  }
  if (type === 'string.base') {
    return res.status(422).json({ message });
  }
  return next();
};

export default {
  validateProduct,
};