import { NextFunction, Request, Response } from 'express';
import { LoginCredential } from '../interfaces';

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,

) {
  const { username, password } = req.body as LoginCredential;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  } if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
}