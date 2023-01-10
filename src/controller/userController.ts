import { Request, Response } from 'express';
import userService from '../services/userServices';

const getAllController = async (_req: Request, res: Response) => {
  const message = await userService();
  return res.status(200).json(message);
};

export default getAllController;