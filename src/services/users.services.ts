import { registerAuserModel, getUserModel } from '../models/users.model';
import { generateToken } from '../auth/jwtFuncs';
import { Iuser, TtokenOrError } from '../types';

export const registerNewUser = async (newUserData : Iuser): Promise<TtokenOrError> => {
  try {
    await registerAuserModel(newUserData);
    const token = await generateToken(newUserData);
    return { token };
  } catch (e) {
    const err = e as TypeError;
    return { error: true, message: err.message };
  }
};

export const getAuserService = async (userLogin :Iuser) => {
  try {
    const user = await getUserModel(userLogin);
    return { user };
  } catch (e) {
    const err = e as TypeError;
    return { error: true, message: err.message };
  }
};
