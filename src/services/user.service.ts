import createTokenJWT from '../auth/jwtFunctions';
import { ILogin, IUser } from '../types';
import userModel from '../models/user.model';
import HttpException from '../shared/http.exception';

const MESSAGES = {
  UNAUTHORIZED: 'Username or password invalid',
};

const create = async (user: IUser) => {
  const id = await userModel.create(user);
  const payload = { id, name: user.username };
  const token = createTokenJWT(payload);
  return {
    status: 201,
    token,
  };
};

const login = async (userCredentials: ILogin) => {
  const user = await userModel.getByUsername(userCredentials.username);
  if (!user) {
    throw new HttpException(401, MESSAGES.UNAUTHORIZED);
  }
  if (user.password !== userCredentials.password) {
    throw new HttpException(401, MESSAGES.UNAUTHORIZED);
  }
  const { id, username } = user;
  const payload = { id, name: username };
  const token = createTokenJWT(payload);
  return {
    status: 200,
    token,
  };
};

export default {
  create,
  login,
};
