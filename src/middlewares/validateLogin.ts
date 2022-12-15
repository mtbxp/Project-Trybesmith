import { Request, Response, NextFunction } from 'express';
import {  usernameSchema, passwordSchema } from '../utils/inputsValidations'

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const validateUsername = usernameSchema.validate(username);
  const validatePassword = passwordSchema.validate(password);
  if (validateUsername.error || validatePassword.error) {
    const error = validateUsername.error || validatePassword.error;
    return res.status(400).json({ message: error?.details[0].message });
  }
  next();
};

export default validateLogin;