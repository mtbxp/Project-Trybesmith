import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const newProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
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
};