import { Request, Response } from 'express';
import usersService from '../service/users.service';

const create = async (req: Request, res: Response) => {
  const users = req.body;
  const result = await usersService.verifyEmail(users);
  if (result?.status === 400) res.status(400).json(result.error);
  res.status(201).json({ token: result?.token });
};

export default {
  create,
};
