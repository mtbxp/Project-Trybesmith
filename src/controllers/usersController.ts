import { Request, Response } from 'express';
import * as usersService from '../services/usersService';
import { ULogin, User } from '../interfaces/interfaces';

const createUser = async (req: Request, res: Response) => {
  const user = req.body as User;
  const result = await usersService.createUser(user);
  // if (!result) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(201).json({ token: result });
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body as ULogin;
  const result = await usersService.login(username, password);
  if (!result) return res.status(401).json({ message: 'Username or password invalid' });
  // console.log(result, 'UC___7');
  return res.status(200).json({ token: result });
};

export {
  createUser,
  login,
};
