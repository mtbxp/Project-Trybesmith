import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

export async function validateProductName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (typeof (name) !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
}

export async function validateProductAmount(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  if (typeof (amount) !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  next();
}

export function validateOrder(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (!productsIds.length) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  
  next();
}