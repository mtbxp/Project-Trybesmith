import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { User } from '../types';

export default class JWT {
  public secret;

  constructor(secret: Secret) {
    this.secret = secret;
  }

  public createToken(payload: User) {
    try {
      const token = jwt.sign(payload, this.secret, { algorithm: 'HS256' });
      return token;
    } catch (error) {
      return console.log(error);
    }
  }

  public verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
      }
      const payload = jwt.verify(authorization, this.secret);
      req.body.user = payload;
      return next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
}