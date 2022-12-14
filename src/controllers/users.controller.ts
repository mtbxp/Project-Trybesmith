import { Request, Response } from 'express';

import * as usersService from '../services/users.service';

async function createUser(request: Request, response: Response): Promise<Response> {
  const { level, password, username, vocation } = request.body;

  const token = await usersService.createUser({ level, password, username, vocation });

  return response.status(201).json({ token });
}

export { createUser };
