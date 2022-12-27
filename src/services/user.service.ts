import { AddUser } from '../interfaces/User.interface';
import userModel from '../models/user.model';
import token from '../utils/token';

const createUser = async (user: AddUser): Promise<string> => {
  const result = await userModel.createUser(user);
  const newToken = token.createToken(result);
  return newToken;
};

export default {
  createUser,
};