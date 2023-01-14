import usersModel from '../models/userModel';
import token from '../helpers/tokenUser';
import { User, UserWithPassword } from '../types/types';

const productCadastro = async (user: UserWithPassword):Promise<string> => {
  const userCreated: User = await usersModel.productCadastro(user);
  const tokenCreated = token.createToken(userCreated);
  return tokenCreated;
};

export default {
  productCadastro,
};