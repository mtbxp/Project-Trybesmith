import { sign, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import User from '../types/User';

dotenv.config();

const secret = 'secret';

export const createToken = (payload: User) => {
  const token = sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = verify(authorization, secret);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  // const decoded = verify(authorization, secret);
  // if (!decoded) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }
  // next();
  }
};

export const returnInfos = (token: string) => {
  const { username, id } = verify(token, secret) as User;
  return { username, id };
};
