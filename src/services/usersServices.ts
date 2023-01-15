import userModel from '../models/usersModel';
import { TUser, TUserIdName } from '../models/allInterfaces/interfaceUser';

const addUserService = async (newUserData: TUser): Promise<TUserIdName> => {
  const newUser = await userModel.addUserModel(newUserData);
  const { id, username } = newUser;
  return { id, username };
};

export default { addUserService };