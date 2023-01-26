import userModel from '../models/userModel';
import User from '../types/User';
import { createToken } from '../auth/jwt';

const addUser = async (user: User) => {
  const result = await userModel.addUser(user);
  return result;
};

const getByUsername = async (username: string, password: string) => {
  const result = await userModel.getByUsername(username, password);
  if (result.length === 0) {
    return { type: 401, message: 'Username or password invalid' };
  }
  const token = createToken({ username, password });
  return { type: 200, message: token };
};

export default {
  addUser,
  getByUsername,
};
