import { TLogin } from '../models/allInterfaces/interfaceLogin';
import loginModel from '../models/loginModel';
import jwtFunction from '../auth/jwtAuthetication';

const loginService = async (loginData: TLogin) => {
  const [successfulLogin] = await loginModel.loginModel(loginData);
  if (!successfulLogin) return { message: 'Username or password invalid' };
  const token = jwtFunction.createToken(successfulLogin);
  return token;
};

export default { loginService };