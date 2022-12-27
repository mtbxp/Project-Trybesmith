import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response): Promise<void> => {
  const user = req.body;
  const newToken = await userService.createUser(user);
  res.status(201).json({ token: newToken });
};

export default {
  createUser,
};