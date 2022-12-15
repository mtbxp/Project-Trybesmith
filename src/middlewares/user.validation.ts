import { NextFunction, Request, Response } from 'express';
import { userValidation } from './schemas';

const validationUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  const { error } = userValidation.validate({ username, vocation, level, password });

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    } return res.status(422).json({ message: error.message });
  }
  next();
};

export default validationUsername;