import usersModel from '../models/usersModel';
import { NewUser } from '../interfaces/User';
import token from '../utils/token';

const addUser = async (user: NewUser): Promise<String> => {
  const result = await usersModel.addUser(user);
  const userToken = token.generateToken(result);
  return userToken;
};

export default {
  addUser,
};
