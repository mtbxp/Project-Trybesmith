import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const user = req.body;
  const userToken = await userService.createUser(user);
  res.status(201).json({ token: userToken });
};

export default {
  createUser,
};