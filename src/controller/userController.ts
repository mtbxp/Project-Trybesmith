import { Request, Response } from 'express';
import * as userService from '../service/userService';

// eslint-disable-next-line import/prefer-default-export
export async function getAll(_req:Request, res: Response) {
  const { status, data } = await userService.getAll();
  res.status(status).json(data);
}