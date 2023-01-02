import { Request, Response, NextFunction } from 'express';
import productValidation from '../utils/validations/productValidations';

export default function validNewProduct(req:Request, res:Response, next:NextFunction) {
  const newProductData = req.body;
  const validation = productValidation(newProductData);
  if (typeof validation !== 'string') {
    return res.status(validation.status).json(validation.data);
  }

  return next();
}