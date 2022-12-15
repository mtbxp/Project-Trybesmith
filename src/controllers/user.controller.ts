import { Request, Response } from 'express';
import { ServiceError, TokenService } from '../interfaces';
import * as userService from '../services/user.service';

export async function create(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const { status, error, result } = await userService
    .create({ username, vocation, level, password });

  if (error) return res.status(status).json({ error: error.message });

  res.status(status).json({ token: result });
}

export async function login(req: Request, res: Response) {
  const user = req.body;
  
  const loginResult = await userService.login(user);
  
  const { result, status } = loginResult as TokenService;
  const { error } = loginResult as ServiceError;
  
  if (error) return res.status(status).json({ error: error.message });

  res.status(status).json({ token: result });
}