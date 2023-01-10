import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import usersModel from '../models/usersModel';

const secretOrPrivateKey = process.env.JWT_SECRET || 'secret';

const createToken = (user: IUser) => {
  const payload = { id: user.id, username: user.username };
  return jwt.sign(payload, secretOrPrivateKey, { expiresIn: '15d', algorithm: 'HS256' });
};

const registerUser = async (user: IUser) => {
  await usersModel.registerUser(user);
  const token = createToken(user);
  return { status: 201, token };
};

export default {
  registerUser,
};
