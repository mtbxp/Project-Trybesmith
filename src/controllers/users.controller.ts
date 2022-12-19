import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { createToken } from '../auth/jwt';

const registerUser = async (req: Request, res: Response) => {
  const userData = req.body;
  await usersService.registerUser(userData);
  const token = createToken(userData);

  return res.status(201).json({ token });
};

const getAllUsers = async (_req: Request, res: Response) => {
  const users = await usersService.getAllUsers();

  return res.status(200).json(users);
};

export default {
  registerUser,
  getAllUsers,
};
