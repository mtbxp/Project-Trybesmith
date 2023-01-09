import { Request, Response } from 'express';
import usersService from '../services/users.service';

const registerUser = async (req: Request, res: Response) => {
  const user = req.body;

  const newUser = await usersService.registerUser(user);
  return res.status(201).json(newUser);
};

export default {
  registerUser,
};