import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { CreatedUser } from '../types/types';
import * as userModel from '../models/user.model';

dotenv.config();

export const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET as string;

export function generateToken(info: CreatedUser) {
  const token = jwt.sign({ info }, secret, config as object);
  return token;
}

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const verifiedToken = jwt.verify(token, secret);
    // const tokenUser = await userModel.getUserByUsername(verifiedToken.info.username);
    // if (!tokenUser) {
    //   return res.status(401).json({ message: 'Invalid token' });
    // }
    req.body.user = verifiedToken;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}