import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const checkValidator = (body: { name: string, amount: string }) => {
  const { error } = Joi.array()
    .min(1)
    .required()
    .items(Joi.number())
    .messages({
      'array.min': '"productsIds" must include only numbers',
      'array.base': '"productsIds" must be an array',
      'any.required': '"productsIds" is required',
      'number.base': '"productsIds" must include only numbers',
    })
    .validate(body);

  return { type: error?.details[0].type,
    message: error?.details[0].message };
};

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { type, message } = checkValidator(productsIds);
  if (type === 'any.required') {
    return res.status(400).json({ message });
  }
  if (type === 'array.min' || type === 'number.base') {
    return res.status(422).json({ message });
  }
  if (type === 'array.base') {
    return res.status(422).json({ message });
  }
  return next();
};

export default {
  validateOrder,
};