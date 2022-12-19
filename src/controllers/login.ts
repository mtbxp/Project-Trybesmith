import { Response, Request } from 'express';
import { createToken } from '../auth/jwt';
import usersService from '../services/users.service';

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await usersService.getUserByUsername({ username, password });
    
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const token = createToken({ username, password });

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Fields', err });
  }
};

export default login;
