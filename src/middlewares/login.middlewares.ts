import { Request, Response, NextFunction } from 'express';
import { AddedUserInterface } from '../interfaces/users.interfaces';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: AddedUserInterface = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};

export default validateLogin;