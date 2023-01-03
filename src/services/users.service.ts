import generateToken from '../auth/generateToken';
import usersModel from '../models/users.model';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
) {
  const userData = await usersModel.createUser(username, vocation, level, password);
  if (!userData) return { status: 400, message: 'was not possible create a new user' };
  const token = generateToken.generateToken(userData);

  return { status: 201, result: token };
}

export default {
  createUser,
};