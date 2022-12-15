import Joi from 'joi';
import { Request, Response } from 'express';

import * as usersService from '../services/users.service';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

async function createUser(request: Request, response: Response): Promise<Response> {
  const { level, password, username, vocation } = request.body;

  const token = await usersService.createUser({ level, password, username, vocation });

  return response.status(201).json({ token });
}

async function login(request: Request, response: Response): Promise<Response> {
  const { password, username } = request.body;

  const { value, error } = loginSchema.validate({ password, username });

  if (error) {
    return response.status(400).json({
      message: error.message,
    });
  }

  try {
    const token = await usersService.login(value);

    return response.json({ token });
  } catch (serviceError) {
    return response.status(401).json({ message: 'Username or password invalid' });
  }
}

export { createUser, login };
