import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const user = jwt.verify(token, secret);
    req.body.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;