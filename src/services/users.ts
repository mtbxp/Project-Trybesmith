import jwt from 'jsonwebtoken';
import UserModel from '../models/users';

const secret: string = process.env.JWT_SECRET || 'secret';

const addUser = async (
  username: string,
  vocation: string,
  level: number,
  password: string,
) => {
  const newUser = new UserModel(username, vocation, level, password);
  const addedUserId = await newUser.saveUser();

  const token = jwt.sign({ data: addedUserId }, secret);

  return { token };
};

export default addUser;