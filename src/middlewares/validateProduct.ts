import { NextFunction, Request, Response } from 'express';
import { ProductDetail } from '../interfaces';

function validatefield(field: string, res: Response, fieldName:string) {
  if (!field) {
    return res.status(400).json({ message: `"${fieldName}" is required` });
  }
    
  if (typeof field !== 'string') {
    return res.status(422).json({ message: `"${fieldName}" must be a string` });
  }
    
  if (field.length < 3) {
    return res.status(422)
      .json({ message: `"${fieldName}" length must be at least 3 characters long` });
  }
    
  return null;
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
  
) {
  const { name, amount } = req.body as ProductDetail;
  
  return validatefield(name, res, 'name')
  || validatefield(amount, res, 'amount')
  || next();
}
