import { Request, Response } from 'express';
import { ServiceError, TokenService } from '../interfaces';
import * as userService from '../services/user.service';
import { userCheck, userCreation } from '../middlewares/userVerification';

export async function create(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const { error: validationError } = userCreation(req.body);

  const statusCode = validationError && /"\w.*" is required/.test(validationError?.message)
    ? 400 : 422;

  if (validationError) return res.status(statusCode).json({ message: validationError.message });

  const { status, error, result } = await userService
    .create({ username, vocation, level, password });

  if (error) return res.status(status).json({ error: error.message });

  res.status(status).json({ token: result });
}

export async function login(req: Request, res: Response) {
  const user = req.body;
  const { error: validationError } = userCheck(user);

  if (validationError) return res.status(400).json({ message: validationError.message });
  
  const loginResult = await userService.login(user);
  
  const { result, status } = loginResult as TokenService;
  const { error } = loginResult as ServiceError;
  
  if (error) return res.status(status).json({ message: error.message });

  res.status(status).json({ token: result });
}