import { Request, Response, NextFunction } from 'express';
import loginModel from '../models/loginModel';

const hasAllFields = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
};

const isLoginValid = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const searchedUser = await loginModel.searchLogin({ username, password });
  if (Array.isArray(searchedUser) && searchedUser.length === 0) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return next();
};

export default {
  hasAllFields,
  isLoginValid,
};