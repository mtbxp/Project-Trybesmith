import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';
import { Tlogin, Tmessage, Tuser } from '../types';

const generateToken = (user:Tuser | Tlogin) => jwt.sign(
  user, 
  process.env.JWT_SECRET as string,
  { algorithm: 'HS256', expiresIn: '2d' },
);

const addUser = async (user: Tuser): Promise<string> => {
  const newUser = await usersModel.addUser(user);
  return generateToken(newUser);
};

const login = async (user: Tlogin): Promise<string | Tmessage | undefined> => {
  const userLogin = await usersModel.login(user);
  if (!userLogin) return undefined;
  const { username, password } = userLogin;
  const foundLogin = { username, password };
  return generateToken(foundLogin as Tlogin);
};

export default { addUser, login };
