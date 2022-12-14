import { TLogin } from '../models/interfaces';
import loginModel from '../models/login.model';
import jwtFunction from '../auth/jwtFunctions';

const login = async (loginData: TLogin) => {
  const [successfulLogin] = await loginModel.findUser(loginData);
  if (!successfulLogin) return { message: 'Username or password invalid' };
  const token = jwtFunction.createToken(successfulLogin);
  return token;
};

export default { login };