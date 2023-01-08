import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { status } from '../utils/status';

const UserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
}).messages({
  'any.required': '{#label} is required',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.base': '{#label} must be a string',
  'number.min': '{#label} must be greater than or equal to {#limit}',
  'number.base': '{#label} must be a number',
});

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const validation = UserSchema.validate(req.body);
  const { error } = validation;

  if (error) {
    const [message] = error.details.map((x) => x.message);
    if (message.includes('is required')) {
      return res.status(status.INFO_IS_REQUIRED).json({ message });
    }
    return res.status(status.TYPE_ERROR).json({ message });
  }
  return next();
};

export default validateUser;