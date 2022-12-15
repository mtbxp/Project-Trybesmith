import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = 'xablau';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const result = jwt.verify(token, secret);
    req.body.currentUser = result;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;