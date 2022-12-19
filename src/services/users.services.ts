import jwt from 'jsonwebtoken';
import UserModel from '../models/users.models';

const secret: string = process.env.JWT_SECRET || 'secret';

const registerUser = async (
  username: string,
  vocation: string,
  level: number,
  password: string,
) => {
  const newUser = new UserModel(username, vocation, level, password);
  const addedUserId = await newUser.save();

  const token = jwt.sign({ data: addedUserId }, secret);

  return { token };
};

export default registerUser;
