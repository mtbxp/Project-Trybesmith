import { Request, Response } from 'express';
import { UserCredential } from '../interfaces';
import * as userService from '../service/userService';

export async function create(req: Request, res: Response) {
  const user = req.body as UserCredential;
  const { status, data } = await userService.createUser(user);
  res.status(status).json(data);
}

export async function login(req: Request, res: Response) {
  const user = req.body as UserCredential;
  const { status, data, error } = await userService.login(user);
  return error ? res.status(status).json(error) : res.status(status).json(data);
}