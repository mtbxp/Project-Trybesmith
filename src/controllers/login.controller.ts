import { Request, Response } from 'express';
import loginUser from '../services/login.service';
import usersService from '../services/users.service';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const [users] = await usersService.findAllUsers();
  console.log(users);
  
  if (users.username !== username || users.password !== password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  
  const token = await loginUser({ username, password });

  return res.status(200).json({ token });
};

export default login;