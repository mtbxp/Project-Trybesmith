import { Request, Response } from 'express';
// import { TUser } from '../types';
import userService from '../services/userService';
import generateToken from '../services/login.service';

const createUser = async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  if (result) {
    const token = generateToken.generateToken(req.body.username);
    res.status(201).json({ token });
  }
};
  
export default { createUser };