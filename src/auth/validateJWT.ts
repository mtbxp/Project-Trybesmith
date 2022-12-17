import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TUser } from '../types';

const secret = process.env.JWT_SECRET as string;

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const result = jwt.verify(token, secret) as TUser;
    req.body.user = result;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
