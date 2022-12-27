import { AddUser } from '../interfaces/User.interface';
import userModel from '../models/user.model';
import token from '../utils/token';

const createUser = async (user: AddUser): Promise<string> => {
  const userData = await userModel.createUser(user);
  const newToken = token.createToken(userData);
  return newToken;
};

export default {
  createUser,
};