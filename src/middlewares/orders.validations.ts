import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import statuses from '../utils/statuses';

const ordersSchema = Joi.array().items().min(1).required()
  .messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
  });

const validateOrders = (req: Request, res: Response, next: NextFunction) => {
  const { error } = ordersSchema.validate(req.body.productsIds);

  if (error) {
    if (error.details[0].type !== 'any.required') {
      return res.status(statuses.MISSING_REQUIREMENT).json({ message: error.message });
    }
    return res.status(statuses.MISSING_FIELDS).json({ message: error.message });
  }
  next();
};

export default validateOrders;
