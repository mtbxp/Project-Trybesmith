import userModel from '../models/usersModel';
import { TUser, TUserWithoutPassword } from '../models/interfaceUser';

const addUserService = async (newUserData: TUser): Promise<TUserWithoutPassword> => {
  const newUser = await userModel.addUserModel(newUserData);
  const { id, username, vocation, level } = newUser;
  return { id, username, vocation, level };
};

export default { addUserService };