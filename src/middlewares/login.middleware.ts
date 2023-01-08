import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { TLogin } from '../types';
import { status } from '../utils/status';

const Login = Joi.object({
  username: 
     Joi.string()
       .required()
       .messages({
         'any.required': '"username" is required',
         'string.empty': '"username" cannot be empty',
       }),
  password: 
     Joi.string()
       .required()
       .messages({
         'any.required': '"password" is required',
         'string.empty': '"password" cannot be empty',
       }),
});

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as TLogin;
  const { error } = Login.validate(user);

  if (error) return res.status(status.INFO_IS_REQUIRED).json({ message: error.details[0].message });

  return next();
};

export default validateLogin;