import { NextFunction, Request, Response } from 'express';
import { ProductDetail, UserDetail } from '../interfaces';

function validateField(field: string, res: Response, fieldName:string) {
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

function validateNumber(field: number, res: Response, fieldName:string) {
  if (!field && field !== 0) {
    return res.status(400).json({ message: `"${fieldName}" is required` });
  }
    
  if (typeof field !== 'number') {
    return res.status(422).json({ message: `"${fieldName}" must be a number` });
  }
    
  if (field < 1) {
    return res.status(422)
      .json({ message: `"${fieldName}" must be greater than or equal to 1` });
  }
    
  return null;
}

function validatePassword(field: string, res: Response) {
  if (!field) {
    return res.status(400).json({ message: '"password" is required' });
  }
    
  if (typeof field !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
    
  if (field.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
    
  return null;
}

export function validateProduct(
  req: Request,
  res: Response,
  next: NextFunction,
  
) {
  const { name, amount } = req.body as ProductDetail;
  
  return validateField(name, res, 'name')
  || validateField(amount, res, 'amount')
  || next();
}

export function validateUser(
  req: Request,
  res: Response,
  next: NextFunction,
  
) {
  const { username, vocation, level, password } = req.body as UserDetail;
  
  return validateField(username, res, 'username')
  || validateField(vocation, res, 'vocation')
  || validateNumber(level, res, 'level')
  || validatePassword(password, res)
  || next();
}
