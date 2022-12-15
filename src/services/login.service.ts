import { Login } from '../interfaces/login.interface';
import userExistDb from '../models/login.model';

const userSearchDb = async (req: Login) => {
  const userExit = await userExistDb(req.username, req.password);
  return userExit;
};

export default userSearchDb;