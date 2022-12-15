import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../types/types';

const secret = process.env.JWT_SECRET as string;

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret) as User;

    req.body.user = decoded;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;