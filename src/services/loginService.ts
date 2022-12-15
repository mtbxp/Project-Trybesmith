import { TLogin } from '../types';
import * as loginModel from '../models/loginModel';
import { status } from '../utils/status';
import { createToken } from '../auth/JSONwebToken';

export async function login(user: TLogin) {
  const getUser = await loginModel.login(user);

  if (!getUser || getUser.password !== user.password) {
    return { status: status.FAILED, message: 'Username or password invalid' };
  }
  const token = createToken({ id: getUser.id, username: getUser.username });
  return { status: status.OK, token };
}

export default login;