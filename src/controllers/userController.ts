import { Request, Response } from 'express';
import userService from '../services/userService';

const getAllUser = async (_req: Request, res: Response) => {
  const user = await userService.getAllUser();
  res.status(200).json(user);
};

const insertUser = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await userService.insertUser(user);
  return res.status(201).json(result);
};

export default { getAllUser, insertUser };
