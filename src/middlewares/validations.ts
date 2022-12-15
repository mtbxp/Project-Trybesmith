import { Request, Response, NextFunction } from 'express';
import { loginRequestSchema } from './schemas';

export default function validateLogin(req: Request, res: Response, next: NextFunction) {
  const loginRequest = req.body;

  const { error } = loginRequestSchema.validate(loginRequest);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
}