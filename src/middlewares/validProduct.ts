import { Request, Response, NextFunction } from 'express';
import validateProducts from '../utils/validations/validateProducts';
import { TProduct } from '../types';

export default function loginvery(req: Request, res: Response, next: NextFunction) {
  const product = req.body as TProduct;

  const validation = validateProducts(product);

  if (validation === '"name" is required' || validation === '"amount" is required') {
    return res.status(400).json({ message: validation });
  }

  if (validation) {
    return res.status(422).json({ message: validation });
  }

  next();
}