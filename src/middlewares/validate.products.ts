import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Products from '../interfaces/products.interface';
import statusCodes from '../statusCodes';
import { InterDecoded } from '../interfaces/orders.interface';
import { secret } from './jwtConfig';

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

export const IdProductsValidate = (request: Request, response: Response, next: NextFunction) => {
  const { productsIds } = request.body;

  if (!productsIds) {
    return response.status(statusCodes.BAD_REQUEST).json({ message: '"productsIds" is required' });
  }

  if (typeof productsIds !== 'object') {
    return response.status(statusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length < 1) {
    return response.status(statusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"productsIds" must include only numbers' });
  }

  next();
};

export const TokenValidate = (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token as string, secret as string) as InterDecoded;
    request.body.userId = decoded.data.userId;
  } catch (error) {
    console.log(error);
    return response.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  
  next();
};