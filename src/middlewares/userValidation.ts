import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const newUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export default {
  newUserValidation: (req: Request, res: Response, next: NextFunction) => {
    const { error } = newUserSchema.validate(req.body);

    if (error) {
      const status = error.details[0].type.includes('required') ? 400 : 422;

      return res.status(status)
        .json({ message: error.details[0].message });
    }

    next();
  },
};