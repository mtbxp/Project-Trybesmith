import { Request, Response } from 'express';
import { UserCredentials } from '../interfaces/user.interface';
import * as userService from '../services/user.service';

export async function createNewUser(req: Request, res: Response) {
  const user = req.body as UserCredentials;
  const data = await userService.createNewUser(user); 
  // console.log(data);
  return res.status(201).json({ token: data });
}