import { NextFunction, Request, Response } from 'express';

function validateLogin(request: Request, response: Response, next: NextFunction) {
  const { body: { username, password } } = request;

  if (!username) {
    return response.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    return response.status(400).json({ message: '"password" is required' });
  }

  next();
}

export default { validateLogin };
