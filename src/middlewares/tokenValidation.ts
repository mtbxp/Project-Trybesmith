import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../auth/token';

const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const result = verifyToken(authorization);
    if (!result) return res.status(401).json({ message: 'Invalid token' });

    req.body.tokenResult = result;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;
