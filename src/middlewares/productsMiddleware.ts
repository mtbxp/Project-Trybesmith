import { NextFunction, Request, Response } from 'express';
import { checkInputsProducts } from './schemas';
import { status } from '../utils/status';

export default function validateProducts(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  const { error } = checkInputsProducts.validate({ name, amount });
  console.log(error);

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(status.INFO_IS_REQUIRED).json({ message: error.message });
    } return res.status(status.TYPE_ERROR).json({ message: error.message });
  }
  next();
}