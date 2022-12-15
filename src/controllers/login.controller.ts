import { Request, Response } from 'express';
import loginUser from '../services/login.service';
import createToken from '../utils/auth/createToken';

export default async function doLogin(req: Request, res: Response) {
  const { username, password } = req.body;
  const user = await loginUser(username, password);
  if (user === null) {  
    return res.status(401).json({ message: 'Username or password invalid' });
  } 
  const token = createToken(user);
  return res.status(200).json({ token });
}