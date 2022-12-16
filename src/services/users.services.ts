import { registerAuserModel, getUserModel } from '../models/users.model';
import { generateToken } from '../auth/jwtFuncs';
import { Iuser, TtokenOrError } from '../types';

export const registerNewUser = async (newUserData : Iuser): Promise<TtokenOrError> => {
  try {
    await registerAuserModel(newUserData);
    const token = await generateToken({ ...newUserData, password: undefined });
    return { token };
  } catch (e) {
    const err = e as TypeError;
    return { error: true, message: err.message };
  }
};

export const verifyLoginService = async (userLogin :Iuser) => {
  try {
    const user = await getUserModel(userLogin);
    if (!user) throw new Error('Username or password invalid');
    const token = await generateToken({ ...user, password: undefined });
    return { token };
  } catch (e) {
    const err = e as TypeError;
    return { error: true, message: err.message };
  }
};
