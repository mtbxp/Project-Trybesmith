import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await userService.createUser(body);

  return res.status(201).json({ token });
};

export default { createUser };