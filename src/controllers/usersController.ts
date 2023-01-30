import { Request, Response } from 'express';
import usersService from '../services/usersService';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const userToken = await usersService.createUser(user);
  res.status(201).json(userToken);
};

export default {
  createUser,
};