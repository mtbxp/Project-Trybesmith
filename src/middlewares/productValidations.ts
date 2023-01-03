import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import HttpError from '../utils/errors';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default {
  validateProduct: (req: Request, _res: Response, next: NextFunction) => {
    const { error } = productSchema.validate(req.body);

    if (!error) return next();

    const statusCode = error.message.includes('required') ? 400 : 422;
    throw new HttpError(statusCode, error.message);
  },
};