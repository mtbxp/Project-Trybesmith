import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../interfaces';
import HttpException from '../shared/http.exception';

const MESSAGES = {
  USERNAME_NOT_FOUND: '"username" is required',
  PASSWORD_NOT_FOUND: '"password" is required',
};

const validateLoginFields = (req: Request, _res: Response, next: NextFunction) => {
  const { username, password } = req.body as ILogin;
  if (!username) throw new HttpException(400, MESSAGES.USERNAME_NOT_FOUND);
  if (!password) throw new HttpException(400, MESSAGES.PASSWORD_NOT_FOUND);
  return next();
};

export default validateLoginFields;
