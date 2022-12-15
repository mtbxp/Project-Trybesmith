import { Request, Response } from 'express';
import loginServices from '../services/login.services';

const logIn = async ({ body: { username, password } }: Request, res: Response) => {
  const { status, token, message, result } = await loginServices.logIn({ username, password });

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json({ token, result });
};

export default {
  logIn,
};
