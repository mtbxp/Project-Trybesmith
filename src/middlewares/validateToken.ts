import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from './jwtConfig';
import IToken from '../interfaces/IToken';

export default async function validateToken(req: Request, res: Response, next:NextFunction) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { payload } = jwt.verify(token, secret) as IToken;
    req.body.user = payload.id;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}