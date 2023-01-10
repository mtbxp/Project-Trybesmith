import jwt from 'jsonwebtoken';
import usersModel from '../models/users.model';
import { TUsers } from '../types';

const generateToken = (user: TUsers) => {
  const payload = { username: user.username, vocation: user.vocation };
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256', expiresIn: '1d',
  });
};

const insertUser = async (newuser: TUsers) => {
  const insert = await usersModel.insertUser(newuser);

  const token = generateToken(insert);

  return { type: null, message: token };
};

export default {
  insertUser,
};