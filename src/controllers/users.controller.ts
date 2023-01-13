import { Request, Response } from 'express';
import userService from '../service/user.service';

const create = async (req: Request, res: Response):Promise<void> => {
  const user = req.body;
  const token = await userService.create(user);
  res.status(201).json({ token });
};

export default {
  create,
};