import { Response, Request } from 'express';
import generateToken from '../auth/jwt';
import usersService from '../services/users..service';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await usersService.findUser({ username, password });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const token = generateToken(user);

  return res.status(200).json({ token });
};

export default login;
