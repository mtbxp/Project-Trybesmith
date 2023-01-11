import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { json } from 'stream/consumers';

const newProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const productsIdsSchema = Joi.array().items(Joi.number()).min(1).messages({
  'array.min': '"productsIds" must include only numbers',
  'array.base': '"productsIds" must be an array',
});

export default {
  newProductValidation: (req: Request, res: Response, next: NextFunction) => {
    const { error } = newProductSchema.validate(req.body);

    if (error) {
      const status = error.details[0].type.includes('required') ? 400 : 422;

      return res.status(status)
        .json({ message: error.details[0].message });
    }

    next();
  },

  productsIdsValidation: (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;

    if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });

    const { error } = productsIdsSchema.validate(productsIds);

    if (error) {
      const status = error.details[0].type.includes('required') ? 400 : 422;

      return res.status(status)
        .json({ message: error.details[0].message });
    }

    next();
  },
};