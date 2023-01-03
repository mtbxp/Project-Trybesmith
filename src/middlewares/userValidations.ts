import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import HttpError from '../utils/errors';

const loginSchema = Joi.object({
  username: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

export default {
  validateLogin: (req: Request, _res: Response, next: NextFunction) => {
    const { error } = loginSchema.validate(req.body);

    if (error) throw new HttpError(400, error.message);

    return next();
  },
};