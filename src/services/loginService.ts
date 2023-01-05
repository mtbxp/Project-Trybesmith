import ILogin from '../Interfaces/login.interface';
import * as loginModel from '../models/loginModel';
import * as authMiddlewares from '../middlewares/authMiddleware';

export default async function login(payload: ILogin): Promise<string | undefined> {
  const { username, password }: ILogin = payload;
  const isuser = await loginModel.default(username, password);
  if (isuser) {
    const user: ILogin = { username: isuser.username, password: isuser.password, id: isuser.id };
    const token = authMiddlewares.default(user);
    return token;
  }
}