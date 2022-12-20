/* import { Request, Response, NextFunction } from 'express';
import { Login } from '../types/index';

export default async function authLogin(req: Request, res: Response, next: NextFunction) {
  const login: Login = req.body;
  if (!login.username) return res.status(400).json({ message: '"username" is required' });
  if (!login.password) return res.status(400).json({ message: '"password" is required' });
  next();
} */