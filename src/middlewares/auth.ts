import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import statusCodes from '../utils/statusCodes';

dotenv.config();

const SECRET_KEY:Secret = process.env.JWT_SECRET as string;

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    req.body.user = payload;
    next();
  } catch (err) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

export default auth;