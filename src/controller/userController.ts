import { Request, Response } from 'express';
import userService from '../services/userService';
import { createToken } from '../auth/jwt';

const addUser = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const user = await userService.addUser(userInfo);
  console.log('userController');
  
  console.log(user);
  
  const token = createToken(userInfo);
  return res.status(201).json({ token });
};

export default {
  addUser,
};