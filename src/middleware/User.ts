import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

interface Body { name: string; amount: string; }

const validator = Joi.object({
  username: Joi.string().min(3).required().label('username'),
  vocation: Joi.string().min(3).required().label('vocation'),
  level: Joi.number().min(1).required().label('level'),
  password: Joi.string().min(8).required().label('password'),
});

const checkValidator = (body: Body) => {
  const { error } = validator.validate(body);
  
  return { type: error?.details[0].type,
    message: error?.details[0].message };
};

const validateNumber = (body: Body, res: Response) => {
  const { type, message } = checkValidator(body);

  if (type === 'any.required') {
    return res.status(400).json({ message });
  }
  if (type === 'number.base') {
    return res.status(422).json({ message });
  }
  if (type === 'number.min') {
    return res.status(422).json({ message });
  }
  return null;
};

const validateString = (body: Body, res: Response) => {
  const { type, message } = checkValidator(body);

  if (type === 'any.required') {
    return res.status(400).json({ message });
  }
  if (type === 'string.base') {
    return res.status(422).json({ message });
  }
  if (type === 'string.min') {
    return res.status(422).json({ message });
  }
  return null;
};

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  return validateNumber(body, res) || validateString(body, res) || next();
};

export default {
  validateUser,
};