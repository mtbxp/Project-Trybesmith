import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserCreated } from '../interfaces/types';

dotenv.config();

export const config = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET as string;

export function tokenGeneration(info: UserCreated) {
  const token = jwt.sign({ info }, secret, config as object);
  return token;
}

export async function tokenValidation(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const verified = jwt.verify(token, secret);
    req.body.user = verified;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
}