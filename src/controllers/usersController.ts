import { Request, Response } from 'express';
import IUser from '../Interfaces/user.interface';
import * as usersService from '../services/usersService';

export default async function createUser(req: Request, res: Response) {
  const { username, password, vocation, level } = req.body as IUser;
  const payload: IUser = { username, password, vocation, level };
  try {
    const newUser: string = await usersService.default(payload);
    res.status(201).json({ token: newUser });
  } catch (err) {
    const result = (err as Error).message;
    return res.status(500).send(result);
  }
}