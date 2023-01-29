import { Request, Response } from 'express';
import usersService from '../services/usersService';

const addUser = async (req: Request, res: Response) => {
  const user = req.body;
  const newUser = await usersService.addUser(user);
  const token = { token: newUser };
  res.status(201).json(token);
};

const login = async (req: Request, res: Response) => {
  const user = req.body;
  if (!user.username) return res.status(400).json({ message: '"username" is required' }); 
  if (!user.password) return res.status(400).json({ message: '"password" is required' }); 
  const loginToken = await usersService.login(user);
  if (!loginToken) return res.status(401).json({ message: 'Username or password invalid' });
  const token = { token: loginToken };
  res.status(200).json(token);
};

export default { addUser, login };
