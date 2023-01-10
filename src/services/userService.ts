import * as userModel from '../models/userModel';
import { User } from '../types/index';

export async function getAll(): Promise<User[]> {
  const users = await userModel.getAll();

  return users;
}

export async function insertUser(user: User) {
  const createUser = await userModel.insertUser(user);
  return createUser;
}

export async function getNameUser({ username, password }: User) {
  const users = await userModel.getAll();
  const userFilter = users.filter((user) => 
    user.username === username && user.password === password);
  console.log(userFilter);
     
  return userFilter;
}