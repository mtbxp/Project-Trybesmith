import IUser from '../interfaces/user.interface';
import * as Users from '../models/userModel';
import createToken from '../auth/token';

// eslint-disable-next-line import/prefer-default-export
export const createUser = async (user: IUser) => {
  const insertId = await Users.createUser(user);
  const token = createToken({ insertId, ...user });
  return { status: 201, token };
};
