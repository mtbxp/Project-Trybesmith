import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { TLogin, TUser } from '../types';

const generateToken = (user: TUser) => {
  const payload = { id: user.id, username: user.username };
  const secret = 'secret';
  return jwt.sign(payload, secret, {
    algorithm: 'HS256', expiresIn: '1d',
  });
};
interface Result {
  status: number,
  token?: string,
  message?: string,
  
}
const login = async (loginBody: TLogin) : Promise<Result> => {
  const user = await userModel.getByUsername(loginBody.username);
  if (!user) {
    return { status: 401, message: 'Username or password invalid' };
  }
  if (user.password !== loginBody.password) {
    return { status: 401, message: 'Username or password invalid' };
  }
  return { status: 200, token: generateToken(user) };
};
  
export default { login, generateToken };