import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = 'xablau';

const validatedToken = async (req: Request, res: Response, next:NextFunction) => {
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

  return next();
};

export default validatedToken;