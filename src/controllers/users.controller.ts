import { Request, Response } from 'express';
import usersService from '../services/users.service';

async function createUser(Req: Request, res: Response) {
  const { username, vocation, level, password } = Req.body;
  const { status, result, message } = await usersService
    .createUser(username, vocation, level, password);
  
  if (message) res.status(status).json(message);

  res.status(status).json({ token: result });
}

export default {
  createUser,
};