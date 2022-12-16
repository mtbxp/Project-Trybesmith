import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  
  if (!auth) return res.status(401).json({ message: 'Token not found' });

  try {
    const result = jwt.verify(auth, process.env.JWT_SECRET as string);
    req.body.currentUser = result;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}