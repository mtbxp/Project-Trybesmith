import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { encodeToken } from '../auth/token';

const registerUser = async (req: Request, res: Response):Promise<void> => {
  const { username, vocation, level, password } = req.body;

  if (!username || !vocation || !level || !password) {
    res.status(400).json({ message: 'some fields are missing' });
  }

  const newUser = await usersService.registerUser({ username, vocation, level, password });
  const token = await encodeToken(newUser);

  res.status(201).json({ token });
};

export default {
  registerUser,
};