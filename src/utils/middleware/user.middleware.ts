import { NextFunction, Request, Response } from 'express';
import { IUser } from '../../interfaces/users';

function validateData(username: string, password: string) {
  if (!username) {
    const message = '"username" is required';
    return ({ status: 400, message });
  }

  if (!password) {
    const message = '"password" is required';
    return ({ status: 400, message });
  }

  return null;
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body as IUser;

  const error = validateData(username, password);

  if (error) return res.status(error.status).json({ message: error.message });

  next();
}