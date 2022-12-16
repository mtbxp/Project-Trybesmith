import { UserRequest } from '../interfaces/user.interface';
import userModel from '../models/user.model';

const createUser = async (user: UserRequest): Promise<number> => {
  const result = await userModel.createUser(user);
  return result;
};

export default { createUser };