import usersModel from '../models/usersModel';
import User from '../types/User';
import LoginInput from '../types/LoginInputs';
import authModule from '../auth/authModule';

const registerUser = async (body: User): Promise<string> => {
  await usersModel.registerUser(body);
  
  const token = authModule.generateToken(body);

  return token;
};

const login = async (userInput: LoginInput) => {
  const user = await usersModel.validateUser(userInput.username);
  if (user === undefined) {
    return { message: 'Username or password invalid' };
  }

  if (user.password !== userInput.password) {
    return { message: 'Username or password invalid' };
  }

  const token = authModule.generateToken(user);

  return { token };
};

export default {
  registerUser,
  login,
};