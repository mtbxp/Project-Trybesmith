import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../types';
import HttpException from '../shared/http.exception';

const MESSAGES = {
  NAME_NOT_FOUND: '"name" is required',
  AMOUNT_NOT_FOUND: '"amount" is required',
};

const validateProductsFields = (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body as IProduct;
  if (!name) throw new HttpException(400, MESSAGES.NAME_NOT_FOUND);
  if (!amount) throw new HttpException(400, MESSAGES.AMOUNT_NOT_FOUND);
  return next();
};

export default validateProductsFields;
