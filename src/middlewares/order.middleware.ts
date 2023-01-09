import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { status } from '../utils/status';

const newOrderSchema = Joi.object({
  productsIds: Joi.array().min(1).required().messages({
    'any.required': '{#label} is required',
    'array.base': '{#label} must be an array',
    'array.min': '{#label} must include only numbers',
  }),
  user: Joi.object(),
});

const validateNewOrder = (req: Request, res: Response, next: NextFunction) => {
  const validation = newOrderSchema.validate(req.body);
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

export default validateNewOrder;