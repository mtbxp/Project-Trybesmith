import { Request, Response, NextFunction } from 'express';
import newOrderValidation from '../utils/validations/orderValidations';

export default function validNewOrder(req:Request, res:Response, next:NextFunction) {
  const newOrder = req.body;
  const validation = newOrderValidation(newOrder);
  if (typeof validation !== 'string') {
    return res.status(validation.status).json(validation.data);
  }

  return next();
}