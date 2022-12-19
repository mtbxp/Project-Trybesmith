import { Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import { registerNewUserService, getAllUsersService } from '../services/users.service';

export const registerNewUserController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { username, vocation, level, password }: User = req.body;
  const result = await registerNewUserService({
    username,
    vocation,
    level,
    password,
  });

  return res.status(201).json({ token: result });
};

export const getAllUsers = async (
  _req: Request,
  res: Response,
) => {
  const result = await getAllUsersService();

  return res.status(200).json(result);
};

export default {
  registerNewUserController,
};
