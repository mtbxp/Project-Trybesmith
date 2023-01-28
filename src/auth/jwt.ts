import { Secret, sign, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import User from '../types/User';

dotenv.config();

const secret: Secret = process.env.JWT_SECRET as Secret;

export const createToken = (payload: User) => {
  const token = sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const decoded = verify(token, secret);
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};
