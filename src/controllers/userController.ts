import { Request, Response } from 'express';
import { UserDetail, UserLogin } from '../interfaces';
import * as userService from '../services/userService';

export default async function create(req: Request, res: Response) {
  const user = req.body as UserDetail;
  const { status, data } = await userService.create(user);

  res.status(status).json(data);
}

export async function login(req: Request, res: Response) {
  const user = req.body as UserLogin;
  const { status, data, error } = await userService.login(user);

  return error
    ? res.status(status).json(error)
    : res.status(status).json(data);
}