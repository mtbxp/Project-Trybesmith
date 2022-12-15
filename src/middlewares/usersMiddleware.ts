import { NextFunction, Request, Response } from 'express';
import { checkInputsUsers } from './schemas';
import { status } from '../utils/status';

export default function validateUsers(req: Request, res: Response, next: NextFunction) {
  const { username, vocation, level, password } = req.body;
  const { error } = checkInputsUsers.validate({ username, vocation, level, password });

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(status.INFO_IS_REQUIRED).json({ message: error.message });
    } return res.status(status.TYPE_ERROR).json({ message: error.message });
  }
  next();
}