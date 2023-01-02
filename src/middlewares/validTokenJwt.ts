import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { DefaultHttpResponse } from '../interfaces/Responses';
import { defaultHttpResponse } from '../utils/responses';

export default function validTokenJwt(req:Request, res:Response, next:NextFunction):
DefaultHttpResponse | void {
  const token = req.headers.authorization;
  if (!token || typeof token !== 'string' || token.length <= 0) {
    const tokenErr = { message: 'Token not found' };
    return defaultHttpResponse(401, tokenErr);
  }

  const secretKey = process.env.JWT_SECRET || 'defaultKey';

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return defaultHttpResponse(401, { message: 'Invalid token' });

    (<any>req).userId = (<any>decoded).userId;
  });
  return next();
}