import { IUser } from '../interfaces/users';
import getByName from '../models/login.model';

export default async function loginUser(username: IUser, password: IUser): Promise<IUser[] | null> {
  const userLogin = await getByName(username, password);
  if (userLogin?.length === 0) return null;
  return userLogin;
}