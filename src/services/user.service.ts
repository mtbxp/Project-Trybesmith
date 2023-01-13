import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import { UserInterface } from '../interfaces/user.interface';
import { TokenInterface } from '../interfaces/token.interface';

export default class UserService {
  public newUser = new UserModel();

  async create(user: UserInterface): Promise<TokenInterface> {
    const createdUser = this.newUser.create(user);

    const secret: string = process.env.JWT_SECRET || 'secret';

    const token = jwt.sign({ data: createdUser }, secret);

    return { token };
  }
}
