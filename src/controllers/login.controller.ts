import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { encodeToken } from '../auth/token';

const login = async (req: Request, res: Response):Promise<void> => {
  const { username, password } = req.body;

  const user = await usersService.getUserByName(username);

  if (!user || user.password !== password) {
    res.status(401).json({ message: 'Username or password invalid' });
    return;
  }
  const token = await encodeToken(user);
  res.status(200).json({ token });
};

export default {
  login,
};