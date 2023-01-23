import { Request, Response } from 'express';
import * as userService from '../service/userService';

export async function createUser(req:Request, res: Response) {
  const { status, token } = await userService.createUser(req.body);
  res.status(status).json({ token });
}

export async function getAllUsers(_req:Request, res: Response) {
  const { status, data } = await userService.getAllUsers();
  res.status(status).json(data);
}