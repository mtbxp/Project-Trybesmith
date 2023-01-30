import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';
import { Tlogin, Tmessage, Tuser, Tpayload } from '../types';

const generateToken = (user:Tpayload | Tlogin) => jwt.sign(
  user, 
  process.env.JWT_SECRET as string,
  { algorithm: 'HS256', expiresIn: '2d' },
);

const addUser = async (user: Tuser): Promise<string> => {
  const newUser = await usersModel.addUser(user);
  console.log(newUser);
  return generateToken(newUser);
};

const login = async (user: Tlogin): Promise<string | Tmessage | undefined | Tpayload> => {
  const wantedId = await usersModel.login(user);
  if (!wantedId) return undefined;
  const { id } = wantedId;
  const payload = { id, username: user.username };
  console.log(payload);
  return generateToken(payload as Tpayload);
};

export default { addUser, login };
