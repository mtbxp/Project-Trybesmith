import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';
import { Tuser } from '../types';

const generateToken = (user:Tuser) => jwt.sign(
  user, 
  process.env.JWT_SECRET as string,
  { algorithm: 'HS256', expiresIn: '2d' },
);

const addUser = async (user: Tuser): Promise<string> => {
  const newUser = await usersModel.addUser(user);
  return generateToken(newUser);
};

export default { addUser };
