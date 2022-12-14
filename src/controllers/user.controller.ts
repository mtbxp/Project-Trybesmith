import { Request, Response } from 'express';
import { UserCredentials } from '../interfaces/user.interface';
import createUser from '../services/user.service';

const createNewUser = async (req: Request, res: Response) => {
  const user = req.body as UserCredentials;
  const data = await createUser(user); 
  return res.status(201).json({ token: data });
};

export default createNewUser;