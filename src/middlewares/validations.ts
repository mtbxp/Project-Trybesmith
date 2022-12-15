import { Request, Response, NextFunction } from 'express';
import { createProductSchema, createUserSchema, loginRequestSchema } from './schemas';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const loginRequest = req.body;

  const { error } = loginRequestSchema.validate(loginRequest);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
}

export function validateNewProduct(req: Request, res: Response, next: NextFunction) {
  const newProductRequest = req.body;

  const { error } = createProductSchema.validate(newProductRequest);

  if (error) {
    const errorType = error.details[0].type as string;
    const errorMessage = error.details[0].message;

    if (errorType === 'string.min' || errorType === 'string.base') {
      return res.status(422).json({ message: errorMessage });
    }

    return res.status(400).json({ message: errorMessage });
  }

  next();
}

export function validateNewUser(req: Request, res: Response, next: NextFunction) {
  const newUserRequest = req.body;

  const { error } = createUserSchema.validate(newUserRequest);

  if (error) {
    const errorType = error.details[0].type as string;
    const errorMessage = error.details[0].message;
    
    if (
      errorType === 'any.required' 
      || errorType === 'string.empty') {
      return res.status(400).json({ message: errorMessage });
    }

    return res.status(422).json({ message: errorMessage });
  }

  next();
}