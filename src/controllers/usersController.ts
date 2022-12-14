import { Request, Response } from 'express';
import usersService from '../services/usersService';
import { Tuser } from '../types/types';

const createUserController = async (req: Request, res: Response) => {
  const user = req.body as Tuser;
  const { status, data } = await usersService.createUserService(user);

  return res.status(status).json(data);
};

export default {
  createUserController,
};