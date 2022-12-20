import { Request, Response } from 'express';
import insertUserService from '../../services/users';

const insertUserController = async (req: Request, res: Response) => {
  const token = await insertUserService(req, res);
  res.status(201).json({ token });
};

export default insertUserController;
