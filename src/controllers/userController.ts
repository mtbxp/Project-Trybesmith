import { Request, Response } from 'express';
import ser from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  const token = await ser.createUser(req.body);
  return res.status(201).json({ token });
};

export default { createUser };