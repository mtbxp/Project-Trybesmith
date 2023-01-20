import createTokenJWT from '../auth/jwtFunctions';
import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const create = async (user: IUser) => {
  const id = await userModel.create(user);
  const payload = { id, name: user.username };
  const token = createTokenJWT(payload);
  return {
    status: 201,
    token,
  };
};

export default {
  create,
};
