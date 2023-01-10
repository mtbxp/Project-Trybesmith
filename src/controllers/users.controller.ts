import { Request, Response } from 'express';
import usersService from '../services/users.service';

const registerUser = async (req: Request, res: Response) => {
  const user = req.body;

  const token = await usersService.registerUser(user);
  return res.status(201).json({ token });
};

export default {
  registerUser,
};