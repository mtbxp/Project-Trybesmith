import { Request, Response } from 'express';
import { checkUserPass, searchUsername } from '../services/users.service';
import { createToken } from '../auth/token';

export const userLoginController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { username, password } = req.body;

    const userData = await checkUserPass({ username, password });
  
    if (!userData || userData.password !== password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const user = await searchUsername(username);
  
    const token = createToken(user);
  
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: 'Errouuu!', error });
  }
};

export default {
  userLoginController,
};
