import { Request, Response } from 'express';
import { Users } from '../interfaces/users';
import userService from '../service/user.service';

const createUser = async (req: Request, res: Response) => {
  const user: Users = req.body;
  const result = await userService.createUser(user);

  res.status(201).json({ token: result });
};

export default {
  createUser,
};