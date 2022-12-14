import { Request, Response } from 'express';
import { TUser } from '../types';
import { status } from '../utils/status';
import * as usersService from '../services/usersService';

export async function insert(req: Request, res: Response) {
  const user = req.body as TUser;
  const newUser = await usersService.insert(user);

  return res.status(status.CREATED).json(newUser);
}

export default insert;