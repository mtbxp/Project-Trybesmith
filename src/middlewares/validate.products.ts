import { NextFunction, Request, Response } from 'express';
import Products from '../interfaces/products.interface';

export const nameProductValidate = (request: Request, response: Response, next: NextFunction) => {
  const { name } = request.body as Products;
  if (!name) {
    return response.status(400).json({ message: '"name" is required' });
  } 

  if (typeof name !== 'string') {
    return response.status(422).json({ message: '"name" must be a string' });
  }

  if (name.length < 2) {
    return response.status(422)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

export const amountProductValidate = (request: Request, response: Response, next: NextFunction) => {
  const { amount } = request.body as Products;
  if (!amount) {
    return response.status(400).json({ message: '"amount" is required' });
  } 

  if (typeof amount !== 'string') {
    return response.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length < 2) {
    return response.status(422)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};