import HttpException from '../shared/http.exception';
import { TLogin } from '../types';
import createToken from '../auth/jsonWebToken';
import loginModel from '../models/login.model';
import { status } from '../utils/status';

const loginUserService = async (user: TLogin):Promise<string> => {
  const userData = await loginModel.login(user);

  if (!userData || userData.password !== user.password) {
    throw new HttpException(status.FAILED, 'Username or password invalid');
  }
  return createToken(userData);
};

export default { loginUserService };