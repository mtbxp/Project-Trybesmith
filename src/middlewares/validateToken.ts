import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const user = jwt.verify(authorization, secret);
    req.body.user = user;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
}

export default validateToken;