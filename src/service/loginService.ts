import connection from '../models/connection';
import UserLogin from '../models/loginModel';
import { User } from '../interfaces';

export default class LoginService {
  public model: UserLogin;

  constructor() {
    this.model = new UserLogin(connection);
  }

  public async userLogin(username: string, password: string): Promise<User> {
    const newLogin = await this.model.userLogin(username, password);

    return newLogin;
  }
}