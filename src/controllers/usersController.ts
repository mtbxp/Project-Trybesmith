import { Request, Response } from 'express';
import usersService from '../services/usersService';
import { Users } from '../types/User';

const addUser = async (req: Request, res: Response) => {
  const user: Users = req.body;
  const addedUser = await usersService.addUser(user);
  return res.status(201).json({ token: addedUser });
};

export default {
  addUser,
};
