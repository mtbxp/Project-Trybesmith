import usersModel from '../models/users.model';
import { TRegister } from '../types';

const register = async (user: TRegister): Promise<TRegister> => {
  const result = await usersModel.register(user);

  return result;
};

export default { register };