import Joi from 'joi';

import { Request, Response, NextFunction } from 'express';

const checkEntries = Joi.object({
  username: Joi.string().required(),
  password: Joi.number().integer().required(),
}).messages({
  'any.required': '{#label} is required',
});

const ValidLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = checkEntries.validate({ username, password });
  if (error !== undefined && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const Valid = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export {
  ValidLogin,
  Valid,
};
