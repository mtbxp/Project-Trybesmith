import { Request, Response, NextFunction } from 'express';

export default function loginvery(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json(
      { message: '"username" is required' },
    );
  }

  const { password } = req.body;

  if (!password) {
    return res.status(400).json(
      { message: '"password" is required' },
    );
  }

  next();
}