import { Request, Response } from 'express';
import { UserDetail } from '../interfaces';
import createUser from '../services/userService';

export default async function create(req: Request, res: Response) {
  const user = req.body as UserDetail;
  const { status, data } = await createUser(user);

  res.status(status).json(data);
}