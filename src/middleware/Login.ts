import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validator = Joi.object({
  username: Joi.string().required().label('username'),
  password: Joi.string().required().label('password'),
});

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = validator.validate(body);
  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
};

export default {
  validateLogin,
};
