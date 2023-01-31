import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'pwd';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const result = jwt.verify(token, secret);
    req.body.user = result;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
}
