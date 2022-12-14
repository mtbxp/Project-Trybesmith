import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ILogin } from '../interfaces/ILogin';

const validateLogin = (login: ILogin) => {
  const schema = Joi.object({
    username: Joi.string().required().messages({
      'string.empty': 'username is required',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'password is required',
    }),
  });

  const { error } = schema.validate(login);

  if (error) return error.details[0].message;
};

const validateUsers = (req: Request, res: Response, next: NextFunction) => {
  const error = validateLogin(req.body);

  if (error) return res.status(400).json({ message: error });

  next();
};

export default validateUsers;