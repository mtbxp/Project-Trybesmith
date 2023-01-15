import connection from '../models/connection';
import UserModel from '../models/users.model';
import status from '../utils/statusCode';
import JWT from '../utils/JWT';
import { ILoginResponse } from '../interfaces/login.interface';
import { IUser } from '../interfaces/users.interface';

export default class LoginService {
  private model;

  constructor() {
    this.model = new UserModel(connection);
  }

  public login = async (username: string, password: string): Promise<ILoginResponse<string>> => {
    const userLogin: IUser[] = await this.model.login(username);

    if (!userLogin.length) {
      return { type: status.HTTP_UNAUTHORIZED, message: 'Username or password invalid' };
    }

    const loggedUser = userLogin.find((user) => user.password === password);

    if (!loggedUser) {
      return { type: status.HTTP_UNAUTHORIZED, message: 'Username or password invalid' };
    }

    const auth = new JWT();
    const token = auth.generateToken({ username, password });
    return { type: status.HTTP_OK, message: token };
  };
}
