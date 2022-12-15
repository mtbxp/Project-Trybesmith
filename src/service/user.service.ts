import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import userModels from '../models/user.models';
import { TUser } from '../type';

dotenv.config();

const insertNewUserService = async (newUser: TUser) => {
  const insertNewUser = await userModels.insertNewUserModel(newUser);
  console.log('** RESULTADO DO INSERT USER **', insertNewUser);
  const { password, ...userData } = newUser;

  const token = jwt
    .sign(
      { data: userData }, 
      process.env.JWT_SECRET || '1511',
      { algorithm: 'HS256' },
    );

  return { status: 201, token };
};

export default { insertNewUserService };