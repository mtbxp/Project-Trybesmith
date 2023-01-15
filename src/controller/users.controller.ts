import { Request, Response } from 'express';
import * as usersService from '../service/users.service';

export default async function addNewUser(req: Request, res: Response) {
  const user = req.body;
  const { message } = await usersService.default(user);
  return res.status(201).json({ token: message });
}