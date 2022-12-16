import { NextFunction, Request, Response } from 'express';
import { status } from '../statusCode/status';

export default function loginNotFound(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) {
    return res.status(status.BADREQUEST).json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(status.BADREQUEST).json({ message: '"password" is required' });
  }

  return next();
}