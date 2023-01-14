import { Request, Response } from 'express';
import usersService from '../services/users.service';

const registerUser = async (req: Request, res: Response) => {
  const user = req.body;

  const token = await usersService.registerUser(user);
  return res.status(201).json({ token });
};

const findAllUsers = async (_req: Request, res: Response) => {
  const users = await usersService.findAllUsers();

  return res.status(200).json(users);
};

export default {
  registerUser,
  findAllUsers,
};