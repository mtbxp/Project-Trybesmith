import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET as string;

export default async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.body.user = decoded;
    next();
    const response = jwt.verify(token, secret);
    req.body.user = response;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}