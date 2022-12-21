import { NextFunction, Request, Response } from 'express';

export const validateNameField = (req: Request, res: Response, next: NextFunction) => {
  const userDate = req.body;
  if (!userDate.username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  return next();
};

export const validatePasswordField = (req: Request, res: Response, next: NextFunction) => {
  const userDate = req.body;
  if (!userDate.password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
};
