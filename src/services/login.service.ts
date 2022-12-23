import { createToken } from '../auth/jwtFunctions';
import { ILogin, ILoginReturn, ILoginWithoutPassword } from '../interfaces';
import connection from '../models/connection';
import LoginModel from '../models/login.model';

export default class LoginService {
  loginModel: LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  async checkUser({ username, password }: ILogin): Promise<ILoginReturn> {
    const user = await this.loginModel.checkUser(username);
    console.log('username', username);
    console.log('password', password);

    if (!user || user.password !== password) { 
      return { status: 401, error: true, message: 'Username or password invalid' }; 
    }

    const data: ILoginWithoutPassword = { id: user.id, username: user.username };
    const token = createToken(data);

    return { status: 200, error: false, message: token };
  }
}