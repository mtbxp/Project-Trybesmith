import userModel from '../models/userModel';
import User from '../types/User';

const addUser = async (user: User) => {
  const result = await userModel.addUser(user);
  return result;
};

export default {
  addUser,
};
