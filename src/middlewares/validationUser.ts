import { NextFunction, Request, Response } from 'express';
import { checkInputsUser } from './schemas';

const validationUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, level, vocation } = req.body;
  const { error } = checkInputsUser.validate({ username, password, level, vocation });

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    } return res.status(422).json({ message: error.message });
  }
  next();
};

export default validationUser;
