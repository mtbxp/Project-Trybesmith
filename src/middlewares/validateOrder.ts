import { Request, Response, NextFunction } from 'express';
import orderSchema from '../services/validation/inputsValidations';

export default function validateOrder(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  const { error } = orderSchema.validate(productsIds);

  if (error) {
    const statusCode = error?.details[0].type === 'any.required' ? 400 : 422;
    return res.status(statusCode).json({ message: error?.details[0].message });
  }

  return next();
}