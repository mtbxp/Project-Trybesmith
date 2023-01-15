import { Request, Response } from 'express';
import userService from '../services/user.services';
import { User } from '../interfaces/user.interface';

const addUser = async (req:Request, res: Response) => {
  const user: User = req.body;
  const userTk = await userService.addUser(user);
  res.status(201).json({ token: userTk });
};

export default {
  addUser,
};
