import { TUser } from '../types';
import usersModel from '../model/users.model';
import createToken from '../auth/jsonWebToken';
import HttpException from '../shared/http.exception';
import { status } from '../utils/status';

const createUserService = async (user: TUser):Promise<string> => {
  try {
    const userCreated = await usersModel.createUser(user);
    const token = createToken(userCreated);
    return token;
  } catch (error) {
    throw new HttpException(status.INFO_IS_REQUIRED, 'fail on create user');
  }
};

export default { createUserService };