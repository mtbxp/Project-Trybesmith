import userModel from '../models/user.model';
import { TUser, TUserIdName } from '../models/interfaces';

const add = async (newUserData: TUser): Promise<TUserIdName> => {
  const newUser = await userModel.add(newUserData);
  const { id, username } = newUser;
  return { id, username };
};

export default { add };