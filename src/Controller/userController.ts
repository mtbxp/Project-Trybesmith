import { Request, Response } from 'express';
import { UserCredential } from '../interfaces';
import createUser from '../service/userService';

export default async function create(req: Request, res: Response) {
  const user = req.body as UserCredential;
  const { status, data } = await createUser(user);
  res.status(status).json(data);
}