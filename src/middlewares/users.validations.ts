import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import statuses from '../utils/statuses';

const userNameSchema = Joi.string().min(3).required().messages({
  'any.required': '"username" is required',
  'string.base': '"username" must be a string',
  'string.min': '"username" length must be at least 3 characters long',
});

const vocationSchema = Joi.string().min(3).required().messages({
  'any.required': '"vocation" is required',
  'string.base': '"vocation" must be a string',
  'string.min': '"vocation" length must be at least 3 characters long',
});

const levelSchema = Joi.number().min(1).required().messages({
  'any.required': '"level" is required',
  'number.base': '"level" must be a number',
  'number.min': '"level" must be greater than or equal to 1',
});

const passwordSchema = Joi.string().min(8).required().messages({
  'any.required': '"password" is required',
  'string.base': '"password" must be a string',
  'string.min': '"password" length must be at least 8 characters long',
});

const usersSchema = Joi.object({
  username: userNameSchema,
  vocation: vocationSchema,
  level: levelSchema,
  password: passwordSchema,
});

const validateUsers = (req: Request, res: Response, next: NextFunction) => {
  const { error } = usersSchema.validate(req.body);

  if (error) {
    if (error.details[0].type !== 'any.required') {
      return res.status(statuses.MISSING_REQUIREMENT).json({ message: error.message });
    }
    return res.status(statuses.MISSING_FIELDS).json({ message: error.message });
  }

  next();
};

export default validateUsers;
