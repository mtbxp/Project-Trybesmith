import { NextFunction, Request, Response } from 'express';
import { checkInputsLogin } from './schemas';

const validationLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = checkInputsLogin.validate({ username, password });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

export default validationLogin;
