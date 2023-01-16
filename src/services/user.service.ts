// ./src/services/user.service.ts

import TokenInterface from '../interfaces/TokenInterface';
import UserInterface from '../interfaces/UserInterface';
import UserModel from '../models/user.model';
import TokenValidation from '../middlewares/tokenValidation';

export default class UserService {
  public user = new UserModel();

  public tokenService = new TokenValidation();

  async create(userData: UserInterface): Promise<TokenInterface> {
    const createdUser = await this.user.create(userData);
    const token = this.tokenService.createToken(createdUser);
    return { token };
  }
}
