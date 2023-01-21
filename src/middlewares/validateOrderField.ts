import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';
import { Order } from '../types';

const MESSAGES = {
  PRODUCT_NOT_FOUND: '"productsIds" is required',
};

const validateOrderFields = (req: Request, _res: Response, next: NextFunction) => {
  const { productsIds } = req.body as Order;
  if (!productsIds) throw new HttpException(400, MESSAGES.PRODUCT_NOT_FOUND);
  return next();
};

export default validateOrderFields;