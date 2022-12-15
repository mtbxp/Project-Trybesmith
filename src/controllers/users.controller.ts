import { Request, Response } from 'express';
import { User } from '../interfaces/users.interface';
import { registerNewUserService } from '../services/users.service';
import token from '../auth/token';

const registerNewUserController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { username, vocation, level, password }: User = req.body;
  const user = await registerNewUserService({
    username,
    vocation,
    level,
    password,
  });
  const newUser = {
    username: user.username,
    vocation: user.vocation,
    level: user.level,
  };
  const newToken = token.createToken(newUser);
  return res.status(201).json({ token: newToken });
};

export default {
  registerNewUserController,
};
