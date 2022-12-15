import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import * as UserService from '../services/user.service';
import { Tpayload } from '../types';

const secret = process.env.JWT_SECRET || 'secret';

export default async function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, secret) as Tpayload;

    const user = await UserService.getByUser(payload.username);

    req.body.use = user;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}