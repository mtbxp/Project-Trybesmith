import { Request, Response } from 'express';
import addUser from '../services/users';

const registerUser = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  const addedUser = await addUser(username, vocation, level, password);

  res.status(201).json(addedUser);
};

export default registerUser;