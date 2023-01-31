import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/jwt';

const validateToken = (req:Request, res:Response, next:NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const verify = verifyToken(token);

  if (!verify) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
};

export default validateToken;