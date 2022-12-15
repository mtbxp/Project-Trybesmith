import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { TUser } from '../types';

const getAllUser = async (): Promise<TUser[]> => {
  const user = await userModel.getAllUser();
  return user;
};

const generateToken = (user: TUser) => {
  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256', expiresIn: '1d',
  });
  return token;
};

const insertUser = async (user: TUser) => {
  await Promise.all([user].map(async (element) => userModel.insertUser(element)));
  const getUsers = await userModel.getAllUser();
  const result = getUsers.length - 1;
  const users = getUsers[result];
  const token = generateToken(users);

  return { token };
};

export default { insertUser, getAllUser, generateToken };