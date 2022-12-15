import Joi from 'joi';
import { Request, Response } from 'express';

import * as usersService from '../services/users.service';

const createUserSchema = Joi.object({
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

async function createUser(request: Request, response: Response): Promise<Response> {
  const { value, error } = createUserSchema.validate(request.body);

  if (error) {
    const checks: RegExp[] = [/must be a/, /must be greater than/, /length must be at least/];
    let status = 400;

    if (checks.some((reg) => reg.test(error.message))) {
      status = 422;
    }

    return response.status(status).json({ message: error.message });
  }

  const token = await usersService.createUser(value);

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
