import { Request, Response, NextFunction } from 'express';
import validateOrder from '../utils/validations/validateOrder';

export default function validOrders(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  const validation = validateOrder(productsIds);

  if (validation === '"productsIds" is required') {
    return res.status(400).json({ message: validation });
  }

  if (validation) {
    return res.status(422).json({ message: validation });
  }

  next();
}