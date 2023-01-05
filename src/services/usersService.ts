import IUser from '../Interfaces/user.interface';
import * as usersModel from '../models/usersModel';

export default async function createUser(user: IUser): Promise<string> {
  const newUser: string = await usersModel.default(user);
  return newUser;
}