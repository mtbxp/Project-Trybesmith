import { Request, Response } from 'express';
import userService from '../services/userService';

const addUser = async (req: Request, res: Response):Promise<void> => {
  const user = req.body;
  const userToken = await userService.addUser(user);
  res.status(201).json({ token: userToken });
};

export default {
  addUser,
};