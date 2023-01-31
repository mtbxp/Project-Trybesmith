import { Request, Response } from 'express';
import usersService from '../services/users..service';
import { generateToken } from '../auth/jwt';

const registerUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  const id = await usersService.registerUser(newUser);
  const token = generateToken({ id, ...newUser });

  return res.status(201).json({ token });
};

export default {
  registerUser,
};