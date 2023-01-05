import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { User } from '../types';

const generateToken = (user: User) => {
  const load = { username: user.username };
  const token = jwt.sign(load, process.env.JWT_SECRET as string, {
    algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

const createUser = async (userInfo: User) => {
  await userModel.createUser(userInfo);
  return generateToken(userInfo);
};

export default { createUser };