import { INewUser } from '../types/types';
import * as userModel from '../models/users.model';
import { tokenUser } from '../auth/jwt';

export default async function addNewUser(user:INewUser) {
  const newUser = await userModel.default(user);
  const userToken = tokenUser(newUser);
  return { type: null, message: userToken };
}