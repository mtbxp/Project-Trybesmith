import { Request, Response } from 'express';
import * as userService from '../service/userService';

// eslint-disable-next-line import/prefer-default-export
export async function createUser(req:Request, res: Response) {
  const { status, token } = await userService.createUser(req.body);
  res.status(status).json({ token });
}