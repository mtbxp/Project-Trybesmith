import usersModel from '../models/usersModel';
import User from '../types/User';
import jwt from '../auth/jwt';

const registerUser = async (body: User): Promise<string> => {
  await usersModel.registerUser(body);
  
  const token = jwt.generateToken(body);

  return token;
};

export default {
  registerUser,
};