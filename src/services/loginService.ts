import jwt from 'jsonwebtoken';
import { getUserByNameAndPass } from '../models/userModel';
import LoginDate, { GetUser } from '../types/login';
import { SECRET } from './userService';

const generateToken = (payload: object) => {
  const token = jwt.sign({ date: payload }, SECRET);
  return token;
};

const verifyLogin = async (loginDate: LoginDate) => {
  const result = await getUserByNameAndPass(loginDate) as GetUser;
  if (!result[0]) {
    return { status: 401, date: { message: 'Username or password invalid' } };
  }
  const token = generateToken(result[0]);
  return { status: 200, date: { token } };
};

export default verifyLogin;