import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import { createToken } from '../auth/jwt';

export default class LoginService {
  constructor(public model = new LoginModel(connection)) { }

  public login = async (username: string, password: string): Promise<string | null> => {
    const [user] = await this.model.login(username);

    if (!user || user.password !== password) {
      console.log(user);
      return null;
    }

    return createToken({ id: user.id, username: user.username });
  };
}
