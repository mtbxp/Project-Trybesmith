import { Request, Response } from 'express';
import { TUser } from '../types';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  const user = req.body as TUser;
  const { status, data } = await userService.createUser(user);
  res.status(status).json(data);
};
  
export default { createUser };