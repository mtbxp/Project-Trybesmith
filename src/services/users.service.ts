import jwt from 'jsonwebtoken';
import usersModel from '../models/users.model';
import IUsers from '../interfaces/users.interface';

const secret = process.env.JWT_SECRET || 'semsegredo';

const insertUser = async (userValues: IUsers): Promise<string> => {
  const user: IUsers = await usersModel.insertUser(userValues);
  const token = jwt.sign({ data: user }, secret);
  return token;
};

export default {
  insertUser,
};