import LoginModel from '../models/login.model';
import connection from '../models/connection';
import ILogin from '../interfaces/login.interface';
import { createToken } from '../auth/jwtFunctions';

export default class LoginService {
  constructor(public loginModel = new LoginModel(connection)) {}

  public async login({ username, password }: ILogin): Promise<string | undefined> {
    const user = await this.loginModel.getByUsername(username);

    if (!user) {
      return undefined;
    }
    
    if (user.password !== password) {
      return undefined;
    } 
    
    const payload = { id: user.id, username: user.username };
    const token = createToken(payload);

    return token;
  }
}