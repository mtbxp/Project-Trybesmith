import { Request, Response } from 'express';
import { TUser } from '../models/interfaces';
import usersService from '../services/users.service';

const addNewProduct = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  const newUser: TUser = { username, vocation, level, password };  
  const token = await usersService.addNewUser(newUser);
  res.status(201).json({ token });
};

export default { addNewProduct };