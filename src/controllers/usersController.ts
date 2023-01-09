import { Request, Response } from 'express';
import usersServices from '../services/usersServices';

const registerUser = async (req: Request, res: Response) => {
  const payload = await usersServices.registerUser(req.body);

  return res.status(201).json({ token: payload });
};

const login = async (req: Request, res: Response) => {
  const { token, message } = await usersServices.login(req.body);

  if (message) {
    return res.status(401).json({ message });
  }
  if (token) {
    return res.status(200).json({ token });
  }
};

export default {
  registerUser,
  login,
};