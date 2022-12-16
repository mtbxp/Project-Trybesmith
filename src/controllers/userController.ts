import { Request, Response } from 'express';

import userService from '../services/userService';

const insertNewUser = async (req: Request, res: Response) => {
  const newUser = req.body;

  const { statusCode, token } = await userService(newUser);

  return res.status(statusCode).json({ token });
};

export default insertNewUser;
