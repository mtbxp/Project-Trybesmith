import jwt from 'jsonwebtoken';
import { Iuser, IuserSafe } from '../interfaces';
import userModel from '../models/user.model';

const secret = process.env.JWT_SECRET as string;

const createToken = async (user: IuserSafe) => {
  const token = jwt.sign(user, secret, { expiresIn: '5m', algorithm: 'HS256' });

  return token;
};

export default async function createUser(user: Iuser): Promise<string> {
  const insertUser: IuserSafe = await userModel(user);
  const newToken = createToken(insertUser);

  return newToken;
}