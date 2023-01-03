import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { JwtPayload } from 'jsonwebtoken';
import { validateToken } from '../auth/token';
import HttpError from '../utils/errors';

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

export default {
  validateUser: (req: Request, _res: Response, next: NextFunction) => {
    const { error } = userSchema.validate(req.body);

    if (!error) return next();

    const statusCode = error.message.includes('required') ? 400 : 422;
    throw new HttpError(statusCode, error.message);
  },

  validateLogin: (req: Request, _res: Response, next: NextFunction) => {
    const { error } = loginSchema.validate(req.body);

    if (error) throw new HttpError(400, error.message);

    return next();
  },

  validateToken: (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if (!authorization) throw new HttpError(401, 'Token not found');

    const { id } = <JwtPayload>validateToken(authorization);
    
    (req as Request & { user: { id: number } }).user = { id };
    
    return next();
  },
};