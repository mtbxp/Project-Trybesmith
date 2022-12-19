import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { createToken } from '../auth/jwt';

const registerUser = async (req: Request, res: Response) => {
  const userData = req.body;
  await usersService.registerUser(userData);
  const token = createToken(userData);

  return res.status(201).json({ token });
};

export default {
  registerUser,
};
