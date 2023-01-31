import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../types';

const secret = process.env.JWT_SECRET as string;
const jwtConfig = { algorithm: 'HS256', expiresIn: '20min' } as object;

export const createToken = (user: User): string => {
  const { id, username } = user;
  const payload = { id, username };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

export const decodeToken = (token:string): object => {
  const decode = jwt.decode(token);
  return decode as object;
};

export const verifyToken = (token: string) => {
  const checkToken = jwt.verify(token, secret);
  return checkToken as object;
};

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = verifyToken(token);
    if (decoded) return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default {
  createToken,
  decodeToken,
  validateToken,
};