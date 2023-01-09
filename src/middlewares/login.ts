import { Request, Response, NextFunction } from 'express';
import { AddedUserInterface } from '../interfaces/users';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: AddedUserInterface = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  next();
};

export default validateLogin;