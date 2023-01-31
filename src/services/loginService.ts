import loginModel from '../models/loginModel';
import { User, MessageJson } from '../types';
import { createToken } from '../middlewares/jwtToken';

const userLogin = async (login: User): Promise<MessageJson> => {
  const user = await loginModel.userLogin(login);  
  if (!user) return { type: 401, message: 'Username or password invalid' };  
  
  const token = createToken(user as User);  
  return { type: 200, message: token };
};

export default {
  userLogin,
};