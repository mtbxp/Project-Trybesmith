import { NextFunction, Request, Response } from 'express';
import { IUser } from '../types';
import HttpException from '../shared/http.exception';

const MESSAGES = {
  USERNAME_NOT_FOUND: '"username" is required',
  VOCATION_NOT_FOUND: '"vocation" is required',
  LEVEL_NOT_FOUND: '"level" is required',
  PASSWORD_NOT_FOUND: '"password" is required',
};

const validateUsersField = (req: Request, _res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body as IUser;
  if (!username) throw new HttpException(400, MESSAGES.USERNAME_NOT_FOUND);
  if (!vocation) throw new HttpException(400, MESSAGES.VOCATION_NOT_FOUND);
  if (typeof level === 'undefined') throw new HttpException(400, MESSAGES.LEVEL_NOT_FOUND);
  if (!password) throw new HttpException(400, MESSAGES.PASSWORD_NOT_FOUND);
  return next();
};

export default validateUsersField;
