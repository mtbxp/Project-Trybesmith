import { NextFunction, Request, Response } from 'express';
// import Joi from 'joi';
import { IProduct } from '../../interfaces/products';

export function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, amount } = req.body as IProduct;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  next();
}

export function validateInfoBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { amount, name } = req.body as IProduct;
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  next();
}

export function validateCaracters(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { amount, name } = req.body as IProduct;
  if (name.length < 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (amount.length < 2) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
}