import { Request, Response } from 'express';
import userService from '../services/userService';
import {
  CREATED_CODE,
  OK_CODE,
  UNAUTHORIZED_CODE,
  USER_INVALID,
} from '../utils';

const registerUser = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await userService.registerUser(body);
  return res.status(CREATED_CODE).json(token);
};

const login = async (req: Request, res: Response) => {
  const { body } = req;

  const token = await userService.login(body);
  if (token.error) {
    return res.status(UNAUTHORIZED_CODE).json({ message: USER_INVALID });
  }
  return res.status(OK_CODE).json(token);
};

export default {
  registerUser,
  login,
};
