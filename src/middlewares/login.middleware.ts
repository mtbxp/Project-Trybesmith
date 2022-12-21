import { NextFunction, Request, Response } from 'express';

function validationLogin(res: Response, req: Request, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) {
    res.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    res.status(400).json({ message: '"password" is required' });
  }

  next();
}

export default {
  validationLogin,
};