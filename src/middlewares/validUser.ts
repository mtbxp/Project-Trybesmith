import { Request, Response, NextFunction } from 'express';
import { loginValidation, newUserValidation } from '../utils/validations/userValidations';

export function validLoggingUser(req:Request, res:Response, next:NextFunction) {
  const userData = req.body;
  const validation = loginValidation(userData);
  if (typeof validation !== 'string') {
    return res.status(validation.status).json(validation.data);
  }

  return next();
}

export function validNewUser(req:Request, res:Response, next:NextFunction) {
  const newUserData = req.body;
  const validation = newUserValidation(newUserData);
  if (typeof validation !== 'string') {
    return res.status(validation.status).json(validation.data);
  }

  return next();
}