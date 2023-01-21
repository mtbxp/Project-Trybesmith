import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const MESSAGES = {
  TOKEN_NOT_FOUND: 'Token not found',
  UNAUTHORIZED: 'Invalid token',
};

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) throw new HttpException(401, MESSAGES.TOKEN_NOT_FOUND);
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = user;
    next();
  } catch (err) {
    throw new HttpException(401, MESSAGES.UNAUTHORIZED);
  }
};

export default authMiddleware;