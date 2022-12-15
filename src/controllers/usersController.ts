import { Request, Response } from 'express';
import { TUser } from '../types';
import { status } from '../statusCode/status';
import * as usersService from '../services/usersService';

export async function insertUserC(req: Request, res: Response) {
  const user = req.body as TUser;
  const token = await usersService.insertUserS(user);

  return res.status(status.CREATED).json({ token });
}

export default insertUserC;