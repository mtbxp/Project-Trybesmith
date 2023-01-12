import { Request, Response, NextFunction } from 'express';
import { INVALID_CODE, PASSWORD_REQUIRED, USERNAME_REQUIRED } from '../utils';

const loginVerify = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(INVALID_CODE).json({ message: USERNAME_REQUIRED });
  }
  if (!password) {
    return res.status(INVALID_CODE).json({ message: PASSWORD_REQUIRED });
  }
  next();
};

export default {
  loginVerify,
};
