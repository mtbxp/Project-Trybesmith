import { Request, Response } from 'express';
import usersService from '../services/users.service';

const addNewUser = async (req: Request, res: Response) => {
  const user = req.body;
  const { statusErro, response } = await usersService.addNewUser(user);

  if (statusErro) return res.status(404).json(response);
  return res.status(201).json({ token: response });
};

export default {
  addNewUser,
};