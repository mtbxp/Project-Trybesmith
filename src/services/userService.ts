import userModel from '../models/userModel';
import User from '../types/User';
import { createToken } from '../auth/jwt';

const addUser = async (user: User) => {
  const result = await userModel.addUser(user);
  return result;
};

const getByUsername = async (name: string, pass: string) => {
  const result = await userModel.getByUsername(name, pass);
  
  if (result.length === 0) {
    return { type: 401, message: 'Username or password invalid' };
  }
  const { id, username, password } = result[0];
  const token = createToken({ username, password, id });
  return { type: 200, message: token, id: result[0].id };
};

export default {
  addUser,
  getByUsername,
};
