import { Request, Response } from 'express';
import userService from '../services/user.service';
import { TUser } from '../types/index';

const create = async (req: Request, res: Response): Promise<void> => {
  const user = req.body as TUser;
  const { status, data } = await userService.create(user);
  res.status(status).json(data);
};

export default {
  create,
};