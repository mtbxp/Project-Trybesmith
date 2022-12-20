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