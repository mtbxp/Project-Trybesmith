import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import usersModel from '../models/usersModel';

const secretOrPrivateKey = process.env.JWT_SECRET || 'secret';

const createToken = (user: IUser) => {
  const payload = { id: user.id, username: user.username };

  const token = jwt.sign(payload, secretOrPrivateKey, { expiresIn: '1d', algorithm: 'HS256' });

  return token;
};

const registerUser = async (user: IUser) => {
  await usersModel.registerUser(user);
  const token = createToken(user);
  return token;
};

export default {
  registerUser,
};
