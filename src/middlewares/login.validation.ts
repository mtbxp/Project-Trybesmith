import { NextFunction, Request, Response } from 'express';
import { Login } from '../interfaces/login.interface';

const validation = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as Login;
  if (!username) {
    res.status(400).json({ message: '\'username\' is required' });
  }
  if (!password) {
    res.status(400).json({ message: '\'password\' is required' });
  }

  next();
};

export default validation;
