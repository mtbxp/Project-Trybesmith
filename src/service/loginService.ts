import { makeLogin } from '../models/login.Model';
import createToken from '../auth/token';
import ILogin from '../interfaces/login.interface';

const loginServ = async (user: ILogin) => {
  const result = await makeLogin(user);
  if (result === 0) {
    return { status: 401, token: null, message: 'Username or password invalid' };
  }

  const token = createToken(user);
  return { status: 200, token };
};

export default {
  loginServ,
};