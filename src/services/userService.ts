import userModel from '../models/userModel';
import { TUser, Token } from '../types';
import { createToken } from '../utils/token';

const registerUser = async (user: TUser): Promise<Token> => {
  const id = await userModel.registerUser(user);

  const { password, ...newUser } = user;
  const payload: TUser = { id, ...newUser };
  const token = createToken(payload);
  return token;
};

export default {
  registerUser,
};
