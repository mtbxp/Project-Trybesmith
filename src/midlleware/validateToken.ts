/* import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Iuser } from '../types/index';

const secret = process.env.SECRET as string;

export default async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret) as Iuser;
    req.body.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
} */