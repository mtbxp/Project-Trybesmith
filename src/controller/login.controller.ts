import { Request, Response } from 'express';
import service from '../services/login.service';
import { TLogin } from '../types';
import createToken from '../utils/token';

async function checkLoginController(req: Request, res: Response):Promise<Response<TLogin>> {
  try {
    const { username, password } = req.body;
    
    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }
  
    if (!password) {
      return res.status(400).json({ message: '"password" is required' });
    }

    const user = await service.checkLoginService(username, password);
    
    const token = createToken(user);

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
}

export default {
  checkLoginController,
};