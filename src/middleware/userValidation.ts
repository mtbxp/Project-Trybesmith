import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.min': '"username" length must be at least 3 characters long' }),
  vocation: Joi.string().min(3).required().messages({
    'string.min': '"vocation" length must be at least 3 characters long' }),
  level: Joi.number().min(1).required().messages({
    'number.min': '"level" must be greater than or equal to 1',
    'number.required': '"level" must be a number' }),
  password: Joi.string().min(8).required().messages({
    'string.min': '"password" length must be at least 8 characters long' }),
}).required().messages({
  'any.required': '{#label} is required',
});

const ValidateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    } return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

export default ValidateUser;
