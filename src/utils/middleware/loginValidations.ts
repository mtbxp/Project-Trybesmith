import { NextFunction, Request, Response } from 'express';
import { IUser } from '../../interfaces/users';

export function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body as IUser;

  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });

  return next();
}

export function validateBodyUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { level, vocation } = req.body;

  if (level === undefined) return res.status(400).json({ message: '"level" is required' });
  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });

  return next();
}
export function validateInfoBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, password, level, vocation } = req.body;
  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  return next();
}

export function validateCaracters(req: Request, res: Response, next: NextFunction) {
  const { username, password, level, vocation } = req.body;
  if (username.length < 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (password.length < 8) {
    return res.status(422).json(
      { message: '"password" length must be at least 8 characters long' },
    );
  }
  if (level < 1) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  if (vocation.length < 2) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  return next();
}