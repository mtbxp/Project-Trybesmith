import { Request, Response } from 'express';
import usersService from '../service/users.service';
import { TUsers } from '../types';

const insertUser = async (req: Request, res: Response) => {
  const user: TUsers = req.body;
  const { type, message } = await usersService.insertUser(user);

  if (type) return res.status(type).json({ message });

  return res.status(201).json({ token: message });
};

export default {
  insertUser,
};