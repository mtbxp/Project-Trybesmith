import { Request, Response } from 'express';
import * as usersService from '../services/usersService';

export async function getAll(_req: Request, res: Response) {
  const users = await usersService.getAll();
  res.status(200).json(users);
}

export async function insertUser(req: Request, res: Response) {
  const users = req.body;
  const result = await usersService.insertUser(users);

  res.status(201).json(result);
}