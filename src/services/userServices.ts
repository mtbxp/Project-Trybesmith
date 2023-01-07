import userModel from '../models/userModel';
import { TUsers } from '../types';

const userAdd = async (user:TUsers): Promise<TUsers> => {
  const newUser = await userModel.userAdd(user);
  return newUser;
};

export default {
  userAdd,
};