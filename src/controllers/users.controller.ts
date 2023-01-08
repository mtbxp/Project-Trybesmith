import { Request, Response } from 'express';
import usersService from '../services/users.service';
import IUsers from '../interfaces/users.interface';

const insertUser = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  const userValues: IUsers = { username, vocation, level, password };
  const token = await usersService.insertUser(userValues);
  res.status(201).json({ token });
};

export default {
  insertUser,
};