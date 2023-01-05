import { Request, Response, NextFunction } from 'express';
import * as loginJoiSchema from './shared/loginJoiSchema';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const schema = loginJoiSchema.default();
  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  } 
  next();
}