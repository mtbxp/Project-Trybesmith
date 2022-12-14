import { Request, Response } from 'express';
import * as usersService from '../services/usersService';
import { User } from '../interfaces/interfaces';

const createUser = async (req: Request, res: Response) => {
  const user = req.body as User;
  const result = await usersService.createUser(user);
  // if (!result) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(201).json({ token: result });
};

const login = async () => {
};

export {
  createUser,
  login,
};
