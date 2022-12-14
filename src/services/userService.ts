import { IUser } from '../interfaces/IUser';
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
}