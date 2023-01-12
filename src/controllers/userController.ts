import { Request, Response } from 'express';
import userService from '../services/userService';
import { CREATED_CODE } from '../utils';

const registerUser = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await userService.registerUser(body);
  return res.status(CREATED_CODE).json({ token });
};

export default {
  registerUser,
};
