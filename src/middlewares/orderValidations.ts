import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import HttpError from '../utils/errors';

const orderSchema = Joi.object({
  productsIds: Joi.array().required(),
});

export default {
  validateOrder: (req: Request, _res: Response, next: NextFunction) => {
    const { error } = orderSchema.validate(req.body);

    // :(
    if (!req.body.productsIds) {
      throw new HttpError(400, '"productsIds" is required');
    }
  
    // :(
    if (!req.body.productsIds.length) {
      throw new HttpError(422, '"productsIds" must include only numbers');
    }

    if (!error) return next();

    const statusCode = error.message.includes('required') ? 400 : 422;
    throw new HttpError(statusCode, error.message);
  },
};