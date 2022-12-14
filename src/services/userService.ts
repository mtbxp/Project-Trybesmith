import { IUser } from '../interfaces/IUser';
import { ILogin } from '../interfaces/ILogin';
import UserModel from '../models/userModel';
import JwtUtils from '../helpers/jwt';

export default class UserService {
  public user = new UserModel();

  public jwt = new JwtUtils();
  
  public create = async (user: IUser) => {
    const createdUser = await this.user.create(user);
    const token = this.jwt.generateJwtToken(createdUser);
    return { token };
  };

  public login = async (login: ILogin) => {
    const user = await this.user.getUser(login);
    
    if (user.length === 0) {
      return { status: 401, error: { message: 'Username or password invalid' } };
    }

    const token = this.jwt.generateJwtToken(user[0]);
    return { status: 200, token };
  };
}