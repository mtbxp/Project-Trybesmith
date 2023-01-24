import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/jwt';
import { TokenResult } from '../utils/interfaces/tokenResultInterface';
import statusCodes from '../utils/statusCodes';

export default function validateToken(req: Request, res: Response, next: NextFunction) {
  const { headers: { authorization: token } } = req;

  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  const { error, data } = verifyToken(token) as TokenResult;

  if (error) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }

  req.body.user = data;

  next();
}