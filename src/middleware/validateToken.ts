import { Request, Response, NextFunction } from 'express';
import jwt from '../auth/jwtConfig';

const { JWT_SECRET: secret } = process.env;

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const result = jwt.validateToken(token, secret);

  if (result.isError) return res.status(401).json({ message: result.message });

  req.user = result;
  return next();
};

module.exports = auth;