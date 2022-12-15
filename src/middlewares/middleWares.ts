import Joi from 'joi';

import { Request, Response, NextFunction } from 'express';

const REQUIRED_FIELD = 'any.required';

const checkEntries = Joi.object({
  username: Joi.string().required(),
  password: Joi.number().integer().required(),
}).messages({
  'any.required': '{#label} is required',
});

const ValidLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = checkEntries.validate({ username, password });
  if (error !== undefined && error.details[0].type === REQUIRED_FIELD) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const checkEntries2 = Joi.object({
  name: Joi.string().min(2).required(),
  amount: Joi.string().min(2).required(),
}).messages({
  REQUIRED_FIELD: '{#label} is required',
  'string.empty': '{#label} must be a string"',
  'string.min': '{#label} length must be at least 3 characters long',
});

const checkProd = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { error } = checkEntries2.validate({ name, amount });
  if (error !== undefined && error.details[0].type === REQUIRED_FIELD) {
    return res.status(400).json({ message: error.details[0].message });
  }
  if (error !== undefined && error.details[0].type !== REQUIRED_FIELD) {
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

export {
  ValidLogin,
  checkProd,
};
