import { Request, Response } from 'express';
import loginService from '../services/loginService';

const getUser = async (req: Request, res: Response) => {
  const user = req.body;
  const { type, message } = await loginService.getUser(user);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

export default { getUser };