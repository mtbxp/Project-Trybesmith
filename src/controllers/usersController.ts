import { Request, Response } from 'express';
import usersServices from '../services/usersServices';

const registerUser = async (req: Request, res: Response) => {
  const payload = await usersServices.registerUser(req.body);

  return res.status(201).json({ token: payload });
};

export default {
  registerUser,
};