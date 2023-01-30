import { Request, Response, NextFunction } from 'express';

export const validateNameLogin = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { username } = request.body;

  if (!username) {
    return response.status(400).json({ message: '"username" is required' });
  }
  if (!username) {
    return response.status(401).json({ message: '"username" or password invalid' });
  }
  return next();
};

export const validatePasswordLogin = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { password } = request.body;
  
  if (!password) {
    return response.status(400).json({ message: '"password" is required' });
  }

  if (!password) {
    return response.status(401).json({ message: 'Username or password invalid' });
  }
  return next();
};