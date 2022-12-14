import { TUser } from '../types';
import userModel from '../models/userModel';

const createUser = async (user: TUser) => {
  const data = await userModel.createUser(user);
  return { status: 201, data };
};
  
export default { createUser };