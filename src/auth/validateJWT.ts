import { Response, Request, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { verifyToken } from './jwt';

export = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = verifyToken(token) as JwtPayload;
    if (decoded.isError) return res.status(401).json({ message: 'Expired or invalid token' });
    req.headers.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: err });
  }
};
