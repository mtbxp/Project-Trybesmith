import { IToken } from '../interfaces/IToken';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/userModel';
import TokenService from '../utils/token';

export default class UserService {
  public user = new UserModel();

  public tokenService = new TokenService();

  async create(userData:IUser):Promise<IToken> {
    const createdUser = await this.user.create(userData);
    const token = this.tokenService.generateToken(createdUser);
    return { token };
  }
}