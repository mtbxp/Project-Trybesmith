import { TLogin } from '../types';
import { createToken } from '../auth/createToken';
import * as loginModel from '../models/loginModel';
import { status } from '../statusCode/status';

export async function login(user: TLogin) {
  const { password } = user;
  const getUser = await loginModel.login(user);

  if (!getUser || getUser?.password !== password) {
    return { status: status.UNAUTHORIZED, message: 'Username or password invalid' };
  }

  const token = createToken([getUser]);
  return { status: status.OK, message: token };
}

export default login;