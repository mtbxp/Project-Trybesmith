import userModel from '../models/user.model';
import { TUser, TUserWithoutPassword } from '../models/interfaces';

const add = async (newUserData: TUser): Promise<TUserWithoutPassword> => {
  const newUser = await userModel.add(newUserData);
  const { id, username, vocation, level } = newUser;
  return { id, username, vocation, level };
};

export default { add };