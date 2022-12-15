import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { InterfaceLogin, InterfaceUser } from '../interfaces';

const secret = 'suaSenhaSecreta' as string;

export const createToken = (data: InterfaceUser | InterfaceLogin) => {
  const token = jwt.sign({ data }, secret, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.body.user = payload;
    
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
