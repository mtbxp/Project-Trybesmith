import { Request, Response } from 'express';
import usersService from '../services/usersService';

const addUser = async (req: Request, res: Response) => {
  const user = req.body;
  const newUser = await usersService.addUser(user);
  const token = { token: newUser };
  res.status(201).json(token);
};

export default { addUser };
