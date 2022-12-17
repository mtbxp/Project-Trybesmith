import { usersCreateModel, usersGetModel } from '../models/users.model';
import { Users, UsersLogin } from '../interface/users.interface';
import statusCode from '../utils/statusCode';

const usersCreateService = async (user: Users) => {
  const result = await usersCreateModel(user);

  if (result.length > 0) return result;
};

interface Service { type: number, message?: string | undefined }

const usersGetService = async (user: UsersLogin): Promise<Service> => {
  const { resultUsername, resultPassword } = await usersGetModel(user);

  if (resultUsername.length === 0) {
    const ret = {
      type: statusCode.UNAUTHORIZED,
      message: 'Username or password invalid',
    };
    return ret;
  }
  if (resultPassword.length === 0) {
    const ret = {
      type: statusCode.UNAUTHORIZED,
      message: 'Username or password invalid',
    };
    return ret;
  }

  return { type: statusCode.OK };
};

export { usersCreateService, usersGetService };