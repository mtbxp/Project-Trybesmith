import { Request, Response } from 'express';
import usersService from '../services/usersService';

const registerUser = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await usersService.registerUser(body);

  return res.status(201).json({ token });
};

export default {
  registerUser,
  // login,
};
