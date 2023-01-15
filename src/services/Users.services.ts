import { IUsers } from '../interfaces/IUsers';
import insert from '../models/Users.model';
import { TokenType } from '../types/Token';
import createToken from '../auth/jwt.auth';

const insertUser = async (user: IUsers): Promise<TokenType> => {
  await insert(user);
  const token = createToken(user);
  return { token };
};

export default insertUser;