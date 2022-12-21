import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import statusCodes from '../utils/statusCodes';

export default function validateJwt(req: Request, res: Response, next: NextFunction) {
  const secret = 'seusecretdetoken';
  const token = req.header('Authorization');
  
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const user = jwt.verify(token, secret);
    
    req.body.user = user;
    return next();
  } catch (e) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
}