import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import userService from '../services/user.service';

const create = async (req: Request, res: Response): Promise<void> => {
  const user = req.body as IUser;
  const { status, token } = await userService.create(user);
  if (token) res.status(status).json({ token });
};

export default {
  create,
};
