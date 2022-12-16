import { Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import { registerNewUserService, userLoginService } from '../services/users.service';

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

export const userLoginController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { username, password } = req.body;

  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (username.error || password.error) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const login = await userLoginService({ username, password });

  return res.status(200).json(login);
};
