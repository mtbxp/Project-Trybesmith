import usersModel from '../models/users.model';
import { TLogin } from '../types';
import tokenGenerator from '../utils/tokenGenerator';

const login = async (userLogin: TLogin) => {
  const user = await usersModel.login(userLogin.username);
  if (!user || user.password !== userLogin.password) {
    return { status: 401, message: 'Username or password invalid' };
  }

  const token = tokenGenerator(user);

  return { status: 200, message: token };
};

export default {
  login,
};