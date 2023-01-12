import userModel from '../models/userModel';
import { TUser, Token, TLogin, TPayload } from '../types';
import { createToken } from '../utils/token';

const registerUser = async (user: TUser): Promise<Token> => {
  const id = await userModel.registerUser(user);

  const { password, ...newUser } = user;
  const payload: TPayload = { id, ...newUser };
  const token = createToken(payload);
  return { token };
};

const login = async (loginUser: TLogin): Promise<Token> => {
  const user = await userModel.login(loginUser);
  if (!user || user.password !== loginUser.password) {
    return { error: true };
  }

  const { password, ...payload } = user;
  const token = createToken(payload);
  return { token };
};

export default {
  registerUser,
  login,
};
