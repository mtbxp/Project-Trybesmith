import IUser from '../interfaces/user.interface';
import * as Users from '../models/userModel';
import createToken from '../auth/token';

export const createUser = async (user: IUser) => {
  const insertId = await Users.createUser(user);
  const token = createToken({ insertId, ...user });
  return { status: 201, token };
};

export async function getAllUsers() {
  const data = await Users.getAllUsers();
  return { status: 200, data };
}