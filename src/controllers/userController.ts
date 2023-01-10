import { Request, Response } from 'express';
import usersService from '../services/usersService';

const registerUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { status, token } = await usersService.registerUser(body);
  res.status(status).json({ token });
};

export default {
  registerUser, 
};
