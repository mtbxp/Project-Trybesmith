import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { TLogin } from '../types';
import { status } from '../utils/status';

const LoginSchema = Joi.object({
  username: 
     Joi.string()
       .required()
       .messages({
         'any.required': '{#label} is required',
         'string.empty': '{#label} cannot be empty',
       }),
  password: 
     Joi.string()
       .required()
       .messages({
         'any.required': '{#label} is required',
         'string.empty': '{#label} cannot be empty',
       }),
});

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as TLogin;
  const { error } = LoginSchema.validate(user);

  if (error) return res.status(status.INFO_IS_REQUIRED).json({ message: error.details[0].message });

  return next();
};

export default validateLogin;