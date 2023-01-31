import { Request, Response } from 'express';
import userService from '../services/user.service';

const newUser = async (req: Request, res: Response):Promise<void> => {
  const user = req.body;
  const userToken = await userService.newUser(user);
  res.status(201).json({ token: userToken });
};

export default {
  newUser,
};