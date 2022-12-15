import Joi from 'joi';

import { Request, Response, NextFunction } from 'express';

const REQUIRED_FIELD = 'any.required';
const REQUIRED_LABEL = '{#label} is required';

const checkEntries = Joi.object({
  username: Joi.string().required(),
  password: Joi.number().integer().required(),
}).messages({
  REQUIRED_FIELD: REQUIRED_LABEL,
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
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
}).messages({
  REQUIRED_FIELD: REQUIRED_LABEL,
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

const checkEntries3 = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  password: Joi.string().required(),
}).messages({
  REQUIRED_FIELD: REQUIRED_LABEL,
  'string.empty': '{#label} must be a string"',
  'string.min': '{#label} length must be at least 3 characters long',
});

const checkUsers = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, password } = req.body;
  const { error } = checkEntries3.validate({ username, vocation, password });
  if (error !== undefined && error.details[0].type === REQUIRED_FIELD) {
    return res.status(400).json({ message: error.details[0].message });
  }
  
  if (error !== undefined && error.details[0].type !== REQUIRED_FIELD) {
    return res.status(422).json({ message: error.details[0].message });
  }
  // if (error) console.log(error.details[0]);
  next();
};

const checkEntries4 = Joi.object({
  level: Joi.number().integer().required(),
}).messages({
  REQUIRED_FIELD: REQUIRED_LABEL,
  'number.base': '{#label} must be a number',
});

const checkUsers2 = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const { error } = checkEntries4.validate({ level });
  if (error !== undefined && error.details[0].type === REQUIRED_FIELD) {
    console.log(error.details[0]);
    return res.status(400).json({ message: error.details[0].message });
  }
  
  if (error !== undefined && error.details[0].type === 'number.base') {
    console.log(error.details[0]);
    return res.status(422).json({ message: error.details[0].message });
  }
  // if (error) console.log(error.details[0]);
  next();
};

const checkEntries5 = Joi.object({
  level: Joi.number().min(1).integer().required(),
  password: Joi.string().min(8).required(),
}).messages({
  'number.min': '{#label} must be greater than or equal to 1',
  'string.min': '{#label} length must be at least 8 characters long',
});

const checkUsers3 = (req: Request, res: Response, next: NextFunction) => {
  const { level, password } = req.body;
  const { error } = checkEntries5.validate({ level, password });
  if (error !== undefined && error.details[0].type === 'string.min') {
    return res.status(422).json({ message: error.details[0].message });
  }
  
  if (error !== undefined && error.details[0].type === 'number.min') {
    return res.status(422).json({ message: error.details[0].message });
  }
  // if (error) console.log(error.details[0]);
  next();
};

export {
  ValidLogin,
  checkProd,
  checkUsers,
  checkUsers2,
  checkUsers3,
};
