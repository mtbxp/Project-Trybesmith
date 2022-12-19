import { Request, Response } from 'express';
import registerUser from '../services/users.services';

const register = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  const addedUser = await registerUser(username, vocation, level, password);

  res.status(201).json(addedUser);
};

export default register;