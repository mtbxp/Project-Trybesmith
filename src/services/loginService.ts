import jwt from 'jsonwebtoken';
import loginModel from '../models/loginModel';
import { TUser } from '../types';

const generateToken = (user: TUser) => {
  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256', expiresIn: '1d',
  });
  return token;
};

const getUser = async (login: TUser) => {
  const user = await loginModel.getUser(login);
  if (!user.length) {
    return { type: 401, message: 'Username or password invalid' };
  }
  const token = generateToken(user[0]);
  return { type: null, message: { token } };
};

export default { getUser, generateToken };