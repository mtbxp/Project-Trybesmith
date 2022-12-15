import { Request, Response } from 'express';
import * as usersService from '../services/usersService';

export async function getAll(_req: Request, res: Response) {
  const users = await usersService.getAll();
  return res.status(200).json(users);
}

export async function insertUser(req: Request, res: Response) {
  const users = req.body;
  const result = await usersService.insertUser(users);

  return res.status(201).json(result);
}

export async function getByLogin(req: Request, res: Response) {
  const login = req.body;
  const { type, message } = await usersService.getByLogin(login);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
}